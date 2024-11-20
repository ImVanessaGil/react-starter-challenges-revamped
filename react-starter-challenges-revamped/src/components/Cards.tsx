import { useState } from "react";
import { Card, Typography, Box } from "@mui/material";
import { Icon } from "@iconify/react";

interface CardsProps {
  title: string;
  year: number;
  imgPoster: string;
}

const Cards = ({ title, year, imgPoster }: CardsProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <Card
      sx={{
        marginTop: "-12px",
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
        <img
          width="250px"
          height="auto"
          src={imgPoster}
          alt={title}
          title="YouTube video thumbnail"
          style={{
            width: "250px",
            height: "auto",
          }}
        />
      </Box>

      <Box>
        <Typography variant="body1" sx={{ color: "black" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {year}
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
  );
};

export default Cards;
