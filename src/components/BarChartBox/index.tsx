/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { SideLeft, SideRight, Container, LegendContainer, Legend } from './styles';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
}
    from 'recharts';
    import formatCurrency from '../../Utils/formatCurrency';



interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string
    }[],
}


const BarChartBox: React.FC<IBarChartProps> = ({
    title, data
}) => (
        <Container>
            <SideLeft>
                <h2>{title}</h2>


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
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    fill={indicator.color}
                                    // cursor="pointer"
                                />
                            ))}
                        </Bar>
                        <Tooltip 
                        cursor={{ fill: 'none'}}
                        formatter={ formatCurrency } 
                        />

                    </BarChart>
                </ResponsiveContainer>
            </SideRight>

        </Container>
    );

export default BarChartBox;