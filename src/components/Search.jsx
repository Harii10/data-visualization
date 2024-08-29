import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect, useState } from "react"
import axios from 'axios'

function Search({optionValue, setSearchTerm}) {

  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:8000/list/')
  //   axios.get('https://jonsnow7.pythonanywhere.com/list/')
  //   .then(response => {
  //     const value = response.data
  //     setSelectValue(value)
  //   })
  // })
  return (
    <Stack spacing={2} sx={{width: 200}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={optionValue.map((option) => option.Name)}
        onInputChange={(event, newInputValue) => {
            setSearchTerm(newInputValue)
          }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

export default Search


