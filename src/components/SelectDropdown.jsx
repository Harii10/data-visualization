import React, { useEffect, useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"


function SelectDropdown({materials, handleSelectChange, selectedValue}) {
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>Select</InputLabel>
            <Select
              value={selectedValue}
              onChange={handleSelectChange}
              label="Name"
            >
            <MenuItem>Select</MenuItem>
              {materials.map((item) => 
            (
              <MenuItem key={item.Name} value={item.Name}>
                {item.Name}
              </MenuItem>
            )
          )}
            </Select>
          </FormControl>
          <div className="flex justify-center items-center mt-10 w-full ">
            <h3 className="text-5xl font-bold font-roboto-mono">{selectedValue}</h3>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default SelectDropdown;
