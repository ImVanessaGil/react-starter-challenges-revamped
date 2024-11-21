import React from "react";
import { TextField } from "@mui/material";

interface TextFieldSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField_search: React.FC<TextFieldSearchProps> = ({
  value,
  onChange,
}) => {
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
          width: "100%",
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
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField_search;
