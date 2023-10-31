import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import PlotComponent from "react-plotly.js";

const Pie = () => {
  const [queryData, setQueryData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/paymentquery");

      const jsonData = await response.json();
      console.log(jsonData);
      setQueryData(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
    setRefresh(false);
  };

  useEffect(() => {
    getProducts();
  }, [refresh]);

  const data = [
    {
      labels: queryData.map((item) => item.paymentmethod),
      values: queryData.map((item) => item.sum),
      type: "pie",
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true,
    },
  ];
  var layout = {
  height: 300,
  width: 300,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: false
  }

  return (
    <Box>
      <Box> <h4>Pie chart: </h4></Box>
      <Box>
        <PlotComponent data={data} layout={layout} />
        <button
          onClick={() => {
            console.log(data);
            setRefresh(true);
          }}
        >
          Refresh
        </button>
      </Box>
    </Box>
  );
};

export default Pie;
