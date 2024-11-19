import React from "react";
import { TextField } from "@mui/material";

const TextField_search = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          marginBottom: "30px",
          width: "70%",
          backgroundColor: "#e0e0e0",
          borderRadius: "25px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#e0e0e0",
              borderRadius: "25px",
            },
            "&:hover fieldset": {
              borderColor: "#dfdfdf",
              borderRadius: "25px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#23272f",
              borderRadius: "25px",
            },
          },
        }}
      />
    </div>
  );
};

export default TextField_search;
