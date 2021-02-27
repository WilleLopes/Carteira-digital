/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



interface IPieCharteProps {

    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];

}



// eslint-disable-next-line @typescript-eslint/no-redeclare
const PieCharte: React.FC<IPieCharteProps> = ({ data }) => (

    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {


                    data.map(indicator => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>


                    ))

                }

                {/* <Legend color="#e44c4e">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend> */}

            </LegendContainer>
        </SideLeft>

        <SideRight>

<ResponsiveContainer>

<PieChart>

    <Pie data={data} dataKey="percent">
{
    data.map((indicator) => (
        <Cell key={indicator.name} fill={indicator.color} />
    ))
}

    </Pie>
</PieChart>


</ResponsiveContainer>



        </SideRight>


    </Container>

);
export default PieCharte;