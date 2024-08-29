import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiFlag2Line } from "@remixicon/react";


function Tables() {
  const [tData, setTdata] = useState([]);

  useEffect(() => {
    // axios.get("http://127.0.0.1:8000/list/")
    axios.get('https://jonsnow7.pythonanywhere.com/list/')
    .then((response) => {
      setTdata(response.data);
    });
  });

  return (
    <>
      <div>
      <div class="block w-full overflow-x-auto h-97">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead className="sticky top-0 bg-main-40 text-white">
        <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Name
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Area Measurements
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
           Construction Cost
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Durability
                        </th>
          </tr>
        </thead>
        <tbody>
        {tData.map((item)=>(
          <tr className="border border-solid border-blueGray-100">
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {item.Name}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              {item.Area_Measurements}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {Math.round(item.Construction_Cost_Over_Time_Years)}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              {Math.round(item.Durability)}
            </td>
          </tr>
        ))}
        
        </tbody>
      </table>
      </div>
      </div>
    </>

  );
}

export default Tables;
