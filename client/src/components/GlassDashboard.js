import React, { useState, useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { getUsers } from '../services/api';
import './Dashboard.css';
import { DisplayLine } from './Charts/DisplayLine';
import DisplayPie from './Charts/DisplayPie';
import { DisplayBar } from './Charts/DisplayBar';
import { DisplayArea } from './Charts/DisplayArea';

const GlassDashboard = ({ DashUser, setDashUser }) => {

  const [Users, setUsers] = useState([]);
  const [render, setRender] = useState();
  const [chartType, setChartType] = useState('line');



  useEffect(() => {
    fetchData();
    if (DashUser.length === undefined) {
      let localUser = JSON.parse(localStorage.getItem('user'));
      // console.log("local", localUser);
      setDashUser(localUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    chartRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType])

  const fetchData = async () => {
    let resp = await getUsers();
    // console.log("resp dash", resp)
    setUsers(resp);
  };

  const chartRender = () => {
    let graphs = [
      { type: 'line', component: <DisplayLine Users={Users} /> },
      { type: 'pie', component: <DisplayPie /> },
      { type: 'bar', component: <DisplayBar /> },
      { type: 'area', component: <DisplayArea /> }
    ]
    // console.log('chartType', chartType);
    let result = graphs.find(item => item.type === chartType);
    // console.log('result', result.component);
    setRender(result.component);
  }

  return (
    <section>
      <div className='Container'>
        <header>
          <a href='' className='logo'>Profile</a>
          <ul className='nav'>
            <li><a href='' className='active'>Home</a></li>
            <li><a href='https://github.com/ShamsQamar?tab=repositories'>Projects</a></li>
            <li>
              <select className='select' onChange={(e) => setChartType(e.target.value)}>
                <option className='option' value='line'>line</option>
                <option className='option' value='pie'>pie</option>
                <option className='option' value='bar'>bar</option>
                <option className='option' value='area'>area</option>
              </select>
            </li>
            <li><a href='/' onClick={() => localStorage.clear()} >Log out</a></li>
          </ul>
        </header>

        <div className='content'>
          <h2>I'm {DashUser.name}</h2>
          <p>{DashUser.role}</p>
          <a href='https://www.linkedin.com/in/shams-qamar-703a21212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>About Me</a>
        </div>


        <ul className='sci'>
          <li><a href='https://www.facebook.com/' target='blank'><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href='https://twitter.com/' target='blank'><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href='https://www.instagram.com/?login&hl=en-gb' target='blank'><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div className='copyrightText'>2023 All rights are reserved. Designed & developed by
          <a href='https://github.com/ShamsQamar?tab=repositories' target='blank'> Shams</a>
        </div>




        {chartType === 'line' ?
          <ResponsiveContainer width="100%" aspect={2.5} className="chart" >
            <LineChart data={Users} width={730} height={250} margin={{ top: 20, right: 6, left: 60, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" dx={-5} dy={3} interval='preserveStartEnd' fontSize={15} />
              <YAxis fontSize={13} />
              <Tooltip />
              <Legend iconSize={25} />
              <Line type="monotone" dataKey="salery" activeDot={{ r: 6 }} stroke='#0066ff'></Line>
              <Line dataKey="hike" stroke='#cc00cc'  ></Line>
            </LineChart>
          </ResponsiveContainer>
          : render}


      </div>
    </section>
  )
}

export default GlassDashboard