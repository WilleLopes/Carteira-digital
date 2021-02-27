/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Container, ChartContainer, Hell, LegendContainer, Legend } from './styles';
import {
    ResponsiveContainer,
    LineChart,
    Line, XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import formatCurrency from '../../Utils/formatCurrency';




interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}


const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) => (

    <Container>


        <Hell>
            <h2>Hitórico de saldo</h2>

            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legend>

                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>saídas</span>
                </Legend>
            </LegendContainer>
        </Hell>



        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <Tooltip formatter={ formatCurrency } />

                    {/* formatter={(value) => formatCurrency(Number(value))} */}
                    {/* essa desgraça aqui era pra funcionar. */}

                    <Line
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />




                    <Line
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                    />


                </LineChart>

            </ResponsiveContainer>
        </ChartContainer>

    </Container>

)

export default HistoryBox;