import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { BarChart } from '@mui/x-charts/BarChart'
import axios from 'axios'

function Bchart() {
  const [seriesNb, setSeriesNb] = useState(2)
  const [itemNb, setItemNb] = useState(6)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [seriesData, setSeriesData] = useState([])
  

  useEffect(() => {
    // axios.get('http://127.0.0.1:8000/list/')
    axios.get('https://jonsnow7.pythonanywhere.com/list/')
      .then((response) => {
        const jsonData = response.data;
        const transformedData = transformData(jsonData)
        setSeriesData(transformedData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const transformData = (data) => {
    const seriesStructure = {
      "Cost_per_Unit": [],
      "Durability": [],
      "Strength": [],
      "Resistance": [],
      "Performance": [],
      "Pressure": [],
      "Construction Cost Over Time Years": [],
      "Area_Measurements": [],
      "Risk_Score": [],
      "Material_Score": [],
    }


    data.forEach(item => {
      seriesStructure["Cost_per_Unit"].push(parseFloat(item.Cost_per_Unit))
      seriesStructure["Durability"].push(parseFloat(item.Durability))
      seriesStructure["Strength"].push(parseFloat(item.Strength))
      seriesStructure["Resistance"].push(parseFloat(item.Resistance))
      seriesStructure["Performance"].push(parseFloat(item.Performance))
      seriesStructure["Pressure"].push(parseFloat(item.Pressure))
      seriesStructure["Construction Cost Over Time Years"].push(parseFloat(item["Construction Cost Over Time Years"]))
      seriesStructure["Area_Measurements"].push(parseFloat(item.Area_Measurements))
      seriesStructure["Risk_Score"].push(parseFloat(item.Risk_Score))
      seriesStructure["Material_Score"].push(parseFloat(item.Material_Score))
    })

    return Object.keys(seriesStructure).map(key => ({
      label: key,
      data: seriesStructure[key],
    }))
  }

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };

  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  }


  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        series={seriesData
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb)
        }))}
        skipAnimation={skipAnimation}
        height={300}
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={5}
        // max={50}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-series-number" gutterBottom>
        Number of data
      </Typography>
      <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      />
    </Box>
    
    
  )

  
}

export default Bchart
