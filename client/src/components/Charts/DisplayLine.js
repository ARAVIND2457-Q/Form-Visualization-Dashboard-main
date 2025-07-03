import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'


export const DisplayLine = ( { Users } ) => {

    return (

        <>

            <ResponsiveContainer width="100%" aspect={2.5} className="chart" >
                <LineChart data={Users} width={730} height={250} margin={{ top: 20, right: 6, left: 60, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="role" dx={-5} dy={3} interval='preserveStartEnd'  fontSize={15}/>
                    <YAxis fontSize={13} />
                    <Tooltip />
                    <Legend iconSize={25} />
                    <Line type="monotone" dataKey="salery" activeDot={{ r: 6 }}  stroke='#0066ff'></Line>
                    <Line dataKey="hike" stroke='#cc00cc'  ></Line>
                </LineChart>
            </ResponsiveContainer>

        </>
    )
}
