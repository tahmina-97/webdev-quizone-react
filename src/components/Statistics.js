import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicsContext } from './Root';

const Statistics = () => {
    const data = useContext(TopicsContext);
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-5xl font-bold text-gray-700 text-center my-5'>Bar Chart on data</h1>
                <p className='p-6 text-gray-600'>The bar graph given below shows the total quiz (in number) from four web development fundamentals subjects.</p>
                <ResponsiveContainer width="99%" height="70%">
                    <BarChart width={700} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;