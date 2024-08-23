import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function Chart({piechartData}) {
  

  return (
    <>
    <div>
    <PieChart
            series={[
              {
                data : piechartData,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                
              },
            ]}
            height={200}
      />
    </div>
      
    </>
  );
}

export default Chart;
