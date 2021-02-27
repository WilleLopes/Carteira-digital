/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ContentHeader from '../../components/ContentHeader';
import Selectinput from '../../components/Selectinput';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import expenses from '../../repositories/expenses';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import gains from '../../repositories/gains';
import listOfMonths from '../../Utils//months';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import WalletBox from '../..//components/WalletBox';
import MessageBox from '../../components/MessageBox';
import happyImg from '../../assets/happy.svg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import sadImg from '../../assets/sad.svg';
import eita from '../../assets/eita.svg';
import PieCharte from '../../components/PieChart2';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';





const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const options = [
    //     { value: 'Mahouka', label: 'Mahouka' },
    //     { value: 'Tatsuya', label: 'Tatsuya' },
    //     { value: 'Shiba', label: 'Shiba' },
    // ]


    const years = useMemo(() => {
        let uniqueYears: number[] = [];



        [...expenses, ...gains].forEach(item => {
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
    }, []);





    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {

            return {
                value: index + 1,
                label: month,
            }
        })

    }, []);


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount! Amount must be number.')
                }

            }
        });
        return total;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected]);


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount! Amount must be number.')
                }

            }
        });
        return total;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected]);



    const sobrou = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains])

    const mensagem = useMemo(() => {
        if (sobrou < 0) {
            return {
                title: "Que triste",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        
        }else if(totalGains === 0 && totalExpenses === 0){

                return {
                
                    title: "Op's!",
                    description: "Neste mês, não há registros de entradas ou saídas.",
                    footerText: "Parece que você não fez nehum registro no mês e ano selecionado.",
                    icon: eita
                }



        }
        else if (sobrou === 0) {
            return {
                title: "Urfaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: eita

            }
        
 



        } else {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim, Considere investir o seu saldo.",
                icon: happyImg,
            }
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sobrou, totalGains, totalExpenses]);



    const versus = useMemo(() => {
        const total = totalGains + totalExpenses;

        const ganhoporcentagem = Number(((totalGains / total) * 100).toFixed(1));
        const saidaporcentagem = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [{
            name: "Entradas",
            value: totalGains,
            percent: ganhoporcentagem ? ganhoporcentagem : 0, 
            color: "#e44c4e"
        },
        {
            name: "Saídas",
            value: totalExpenses,
            percent: saidaporcentagem ? saidaporcentagem : 0,
            color: "#f7931b"
        },

        ];

        return data;

    }, [totalGains, totalExpenses])



    const hitsoryData = useMemo(() => {
        return listOfMonths
            .map((_,
                month) => {
                let amountEntry = 0;
                gains.forEach(gain => {
                    const date = new Date(gain.date);
                    const gainMonth = date.getMonth();
                    const gainYear = date.getFullYear();

                    if (gainMonth === month && gainYear === yearSelected) {
                        try {
                            amountEntry += Number(gain.amount);
                        } catch {
                            throw new Error('amountEntry is invalid, amountEntry must be invalid nuber.')
                        }
                    }

                });


                let amountOutput = 0;
                expenses.forEach(expense => {
                    const date = new Date(expense.date);
                    const expenseMonth = date.getMonth();
                    const expenseYear = date.getFullYear();

                    if (expenseMonth === month && expenseYear === yearSelected) {
                        try {
                            amountOutput += Number(expense.amount);
                        } catch {
                            throw new Error('amountOutput is invalid, amountOutput must be invalid nuber.')
                        }
                    }

                });


                return {
                    monthNumber: month,
                    month: listOfMonths[month].substr(0, 3),
                    amountEntry,
                    amountOutput
                }



            })

            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
            });


    }, [yearSelected]);




    const graficofinal = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
            .filter((expense) => {
                const date = new Date(expense.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;

                return month === monthSelected && year === yearSelected;
            })
            .forEach((expense) => {
                if (expense.frequency === 'recorrente') {
                    return amountRecurrent += Number(expense.amount)
                }

                if (expense.frequency === 'eventual') {
                    return amountEventual += Number(expense.amount)
                }

            });


        const total = amountRecurrent + amountEventual;


        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [{

            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: recurrentPercent ? recurrentPercent : 0,
            color: "#f7931b"
        },

        {

            name: 'Eventuais',
            amount: amountEventual,
            percent: eventualPercent ? eventualPercent : 0,
            color: "#e44c4e"
        },




        ];


    }, [monthSelected, yearSelected]);






    const graficofinal2 = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
            .filter((gain) => {
                const date = new Date(gain.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;

                return month === monthSelected && year === yearSelected;
            })
            .forEach((gain) => {
                if (gain.frequency === 'recorrente') {
                    return amountRecurrent += Number(gain.amount)
                }

                if (gain.frequency === 'eventual') {
                    return amountEventual += Number(gain.amount)
                }

            });


        const total = amountRecurrent + amountEventual;
        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [{

            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: recurrentPercent ? recurrentPercent : 0,
            color: "#f7931b"
        },

        {

            name: 'Eventuais',
            amount: amountEventual,
            percent: eventualPercent ? eventualPercent : 0,
            color: "#e44c4e"
        },




        ];


    }, [monthSelected, yearSelected]);









    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch {
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





    return (
        <Container>

            <ContentHeader title="Dashboard" linecolor="#F7931B">


                <Selectinput options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected} />
                <Selectinput options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected} />



            </ContentHeader>

            <Content>

                <WalletBox
                    title="saldo"
                    amount={sobrou}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="dollar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />


                <MessageBox
                    title={mensagem.title}
                    description={mensagem.description}
                    footerText={mensagem.footerText}
                    icon={mensagem.icon}
                />


                <PieCharte data={versus} />


                <HistoryBox
                    data={hitsoryData}
                    lineColorAmountEntry={"#f7931b"}
                    lineColorAmountOutput={"#e44c4e"}
                />


                <BarChartBox
                    data={graficofinal}
                    title="Saídas"

                />

                <BarChartBox
                    data={graficofinal2}
                    title="Entradas"

                />



            </Content>

        </Container>
    );
}

export default Dashboard;