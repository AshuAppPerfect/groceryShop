import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import PlotComponent from "react-plotly.js";

const Bar = () => {
  const [queryData, setQueryData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/orderquery");

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
      x: queryData.map((item) => item.product_name),
      y: queryData.map((item) => item.times_ordered),
      type: "bar",
    },
  ];

  return (
    <Box>
      <Box> <h4>Product Sales Analysis</h4></Box>
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

export default Bar;
