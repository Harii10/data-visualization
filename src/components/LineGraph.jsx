import { LineChart } from '@tremor/react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { AreaChart } from '@tremor/react'



function LineGraph() {
  const [nData, setNdata] = useState([])


useEffect(()=>{
  // axios.get('http://127.0.0.1:8000/chartlist/')
  axios.get('Jonsnow7.pythonanywhere.com/chartlist/')
  .then( response => {
    setNdata(response.data)
  } 
  )
}, [])
  return (
    <>
    <AreaChart
      className="h-80 bg-white"
      data={nData}
      index="Name"
      categories={['Area_Measurements', 'Pressure']}
      colors={['indigo', 'cyan']}
      // valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </>
    
    

  );
}

export default LineGraph