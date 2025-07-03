import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, LabelList } from 'recharts'

const DisplayPie = () => {

    const Languages = [
        {
            name: "Python",
            student: 13,
            fees: 10
        },
        {
            name: "Javascript",
            student: 15,
            fees: 12
        },
        {
            name: "PHP",
            student: 6,
            fees: 10
        },
        {
            name: "Java",
            student: 10,
            fees: 5
        },
        {
            name: "C#",
            student: 9,
            fees: 4
        },
        {
            name: "C++",
            student: 10,
            fees: 8
        }
    ]

    return (
        <ResponsiveContainer width="100%" aspect={2.5} className="chart" >
            <PieChart width={730} height={250} margin={{ left: 120, bottom: 4 }}>
                <Legend iconSize={18} payload={[{ value: 'Fees', type: 'square', id: 'ID01', color: "#8884d8" }, { value: 'Students', type: 'square', id: 'ID02', color: "#82ca9d" }]}/>
                <Pie data={Languages} dataKey="fees" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={Languages} dataKey="student" nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={90} fill="#82ca9d" label>
                <LabelList dataKey='name' position= 'insideEnd' fontSize={12} />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default DisplayPie;