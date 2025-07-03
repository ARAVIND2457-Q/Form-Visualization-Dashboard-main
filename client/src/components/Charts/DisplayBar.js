import React from 'react'
import { ResponsiveContainer, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

export const DisplayBar = () => {

    const data = [
        {
            "name": "MCU",
            "movies": 6500,
            "book": 4000
        },
        {
            "name": "Star Wars",
            "movies": 5000,
            "book": 1398
        },
        {
            "name": "Harry Potter",
            "movies": 4560,
            "book": 8080
        },
        {
            "name": "L.O.T.R",
            "movies": 5930,
            "book": 3400
        },
        {
            "name": "DC",
            "movies": 3490,
            "book": 4300
        }
    ]

    return (
        <ResponsiveContainer width="100%" aspect={2.5} className="chart">
            <BarChart width={730} height={250} data={data} margin={{ top: 20, left: 60, }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Popularity', angle: -90, position: 'insideLeft', fontSize: 14 }} fontSize={13} />
                <Tooltip />
                <Legend iconSize={20}  />
                <Bar dataKey="book" fill="#008fb3" />
                <Bar dataKey="movies" fill="#9900e6" />
            </BarChart>
        </ResponsiveContainer>
    )
}
