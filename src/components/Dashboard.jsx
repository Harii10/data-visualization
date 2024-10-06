import React, { useEffect, useState } from "react";
import LineGrapgh from "./LineGraph";
import Bchart from "./Bchart";
import Tables from "./Tables";
import Cards from "./Cards";
import Chart from "./Chart";
import SelectDropdown from "./SelectDropdown";
import axios from "axios";

function Dashboard() {
  const [materials, setMaterials] = useState([]);
  const [selectedValue, setSelectedvalue] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jonsnow7.pythonanywhere.com/list/")
      .then((response) => setMaterials(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [])

  useEffect(() => {
    axios
      .get("https://jonsnow7.pythonanywhere.com/nestedlist/")
      .then((response) => setSelectedData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const transformedData = selectedData.map((item) => {
    const [nameKey] = Object.keys(item);
    return {
      name: nameKey.replace("Name: ", ""),
      ...item[nameKey],
    };
  });

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedvalue(value);
    const selected = transformedData.find(
      (item) => item.name === event.target.value
    );
    setSelectedName(selected);
  };

  const piechartData = selectedName
    ? [
        { label: "Strength", value: parseFloat(selectedName.Strength) },
        { label: "Resistance", value: parseFloat(selectedName.Resistance) },
        { label: "Performance", value: parseFloat(selectedName.Performance) },
      ]
    : [];

  return (
    <div className="m-0 lg:ml-75 mt-10">
      <div className="">
        <Cards />
      </div>
      <div className=" p-2 lg:my-10 mx-2 lg:p-5 shadow-lg rounded-xl border border-gray-300 lg:bg-white">
        <LineGrapgh />
      </div>
      <div className="my-10 mx-2 p-5 shadow-lg rounded-xl border border-gray-300 lg:bg-white">
        <Bchart />
      </div>

      <div className="flex flex-col-reverse lg:flex lg:flex-row gap-0">
        <div className="w-full lg:w-2/3 my-10 mx-2 shadow-lg rounded-xl border border-gray-300 bg-white h-97">
          <Tables />
        </div>
        <div className="mx-2 gap-5 flex flex-col lg:gap-20 w-96 lg:my-10 shadow-lg rounded-xl border border-gray-300 lg:bg-white">
          <div>
            <SelectDropdown
              selectedValue={selectedValue}
              selectedName={selectedName}
              handleSelectChange={handleSelectChange}
              materials={materials}
            />
          </div>
          <div>
            <Chart piechartData={piechartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
