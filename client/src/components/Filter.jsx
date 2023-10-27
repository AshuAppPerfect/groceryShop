import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Card,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Filter = (props) =>{
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler (title){
        setCategory(title);
    }

     const buttonStyle = {
    margin: "5px",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "2px solid transparent",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  };

  const activeButtonStyle = {
    backgroundColor: "lightgray",
    border: "2px solid black",
  };
    return (
   <div>
      {props.filterData.map((data) => {
        return (
          <button
            key={data.id}
            onClick={() => filterHandler(data.title)}
            style={{
              ...buttonStyle,
              ...(category === data.title ? activeButtonStyle : {}),
            }}

          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;