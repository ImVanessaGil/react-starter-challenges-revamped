import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "../hooks/use-debounce";

interface TextFieldSearchProps {
  onDebouncedChange: (value: string) => void;
}

const TextField_search: React.FC<TextFieldSearchProps> = ({
  onDebouncedChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 300);

  React.useEffect(() => {
    onDebouncedChange(debouncedValue);
  }, [debouncedValue, onDebouncedChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField_search;
