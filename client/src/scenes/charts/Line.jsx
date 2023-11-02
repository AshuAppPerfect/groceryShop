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
    x: queryData.map((item) => item.month),
    y: queryData.map((item) => item.total_sales),
    type:'scatter',
    name:'Total sales',
    line: {
    width: 3
  }
  }

  var trace2 = {
    x: queryData.map((item) => item.month),
    y: queryData.map((item) => item.total_selling_price),
     type:'scatter',
     name:'Selling Price',
    line: {
      dash: 'dashdot',
    width: 1
  }
  }

   var trace3 = {
    x: queryData.map((item) => item.month),
    y: queryData.map((item) => item.total_cost),
     type:'scatter',
     name:'Cost Price',
    line: {
      dash: 'dashdot',
    width: 1
  }
  }
  var trace4 = {
    x: queryData.map((item) => item.month),
    y: queryData.map((item) => item.total_profit),
     type:'scatter',
     name:'Profit',
    line: {
    width: 3
  }
  }

  const data = [
    trace1, trace2, trace3,trace4
  ];

  return (
    <Box>
      <Box> <h4>Sales Profit Analysis:</h4></Box>
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
