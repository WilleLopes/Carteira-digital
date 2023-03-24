/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useMemo, useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import Selectinput from '../../components/Selectinput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import gains from '../../repositories/gains';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import expenses from '../../repositories/expenses';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import formatCurrency from '../../Utils/formatCurrency';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import formatDate from '../../Utils/formatDate'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import listOfMonths from '../../Utils/months';
import { v4 as uuid_v4 } from "uuid";
uuid_v4()

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IData {
    id: string;
    description: string;
    amountFormated: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}


// match ele vem o brouserRouer
const List: React.FC<IRouteParams> = ({ match }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<IData[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);
    // const [selectedFrequency, setSelectedFrequency] = useState<string[]>([]); uma segunda maneira de fazer só que com o filtro apagado.





    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type } = match.params ;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars




    // const title = useMemo(() => {
    //     return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    // }, [type]);


    // const lineColor = useMemo(() => {
    //     return type === 'entry-balance' ? '#E44C4E' : '#F7931B'
    // }, [type]);

    // const listData = useMemo(() => {
    //     return type === 'entry-balance' ? gains : expenses;
    // }, [type]);



const pageData = useMemo(() => {
    return type === 'entry-balance' ?
    {
        title: 'Entradas',
        lineColor: '#4E41F0',
        data: gains
    }
    :
    {
        title: 'Saídas',
        lineColor: '#E44C4E',
        data: expenses
    }
},[type]);








    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        const { data } = pageData;

        data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });


        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, [data]);





    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {

            return {
                value: index + 1,
                label: month,
            }
        })

    }, []);



    const handleFrequencyClick = (frequency: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const filtered = selectedFrequency.filter(item => item != frequency);
            setSelectedFrequency(filtered);
        } else {
            setSelectedFrequency((prev) => [...prev, frequency]);
        }
    }






const handleMonthSelected = (month: string) => {
    try {
        const parseMonth = Number(month);
        setMonthSelected(parseMonth);
    }
    catch{
        throw new Error('Inavlid month value. Is accept 0 - 24.')
    }
}

const handleYearSelected = (year: string) => {
    try {
        const parseYear = Number(year);
        setYearSelected(parseYear);
    }
    catch {
        throw new Error('Inavlid year value. Is accept integer numbers.')
    }
}







    useEffect(() => {
const { data } = pageData;

        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredData.map(item => {

            return {
                id: uuid_v4(),
                description: item.description,
                amountFormated: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })


        setData(formattedData);

    }, [ monthSelected, yearSelected, data.length, selectedFrequency])




    
    return (
        <Container>
            <ContentHeader title={pageData.title} linecolor={pageData.lineColor}>


                <Selectinput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <Selectinput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />


            </ContentHeader>


            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent
                    ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
  </button>

                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}

                >
                    Eventuais
  </button>

            </Filters>



            <Content>

                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormated}
                        />


                    ))}


            </Content>

        </Container>
    );
}

export default List;