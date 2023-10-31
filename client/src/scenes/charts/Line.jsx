import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import PlotComponent from "react-plotly.js";

const Line = () => {
  const [queryData, setQueryData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/datequery");

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

  var trace1 = {
    x: queryData.map((item) => item.orderdate),
    y: queryData.map((item) => item.total_sales),
    type:'scatter'
  }

  const data = [
    trace1
  ];

  return (
    <Box>
      <Box> <h4>Line chart: </h4></Box>
      <Box>
        <PlotComponent data={data} />
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

export default Line;
