import React, { useEffect, useState } from 'react'
import { BarChart, FunnelChart } from '@tremor/react';
import axios from 'axios'


function Bchart() {
    const [bData, setBdata] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/chartlist/')
        .then(response =>{
            setBdata(response.data)
        })
    })
  return (
    <div>
        <BarChart
    data={bData}
    index="Name"
    categories={['Cost_per_Unit']}
    colors={['blue']}
    // valueFormatter={dataFormatter}
    yAxisWidth={48}
    onValueChange={(v) => console.log(v)}
    />
    </div>
  )
}

export default Bchart