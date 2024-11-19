import React from "react";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import Cards from "../components/Cards";
import TextField_search from "../components/TextField-search";

const Video = () => {
  return (
    <>
      <Card
        sx={{
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            color: "black",
            marginTop: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h3">React Videos</Typography>
          <Typography variant="h6">A brief history of React</Typography>
        </div>
        <TextField_search />
        <Cards />
        <Cards />

        <Cards />
        <Cards />
      </Card>
    </>
  );
};

export default Video;
