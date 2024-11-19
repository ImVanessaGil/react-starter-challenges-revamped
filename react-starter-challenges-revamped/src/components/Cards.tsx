import React, { useState } from "react";
import { Card, Typography, Box } from "@mui/material";
import { Icon } from "@iconify/react";

const Cards = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <Card
        sx={{
          paddingX: "350px",
          paddingY: "20px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Box>
          <iframe
            width="250px"
            height="auto"
            src="https://www.youtube.com/embed/1wZoGFF_UMI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>

        <Box>
          <Typography variant="body1" sx={{ color: "black" }}>
            React: The Documentary
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            The origin story of React
          </Typography>
        </Box>

        <Box sx={{ textAlign: "end" }}>
          <Icon
            icon={isLiked ? "mdi:heart" : "mdi:heart-outline"}
            onClick={toggleLike}
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: isLiked ? "red" : "#6c6c6c",
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default Cards;
