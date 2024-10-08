import { useEffect, useState } from 'react'
import axios from 'axios'
import { AreaChart } from '@tremor/react'



function LineGraph() {
  const [nData, setNdata] = useState([])


useEffect(()=>{
  axios.get('https://jonsnow7.pythonanywhere.com/chartlist/')
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
    
    

  )
}

export default LineGraph