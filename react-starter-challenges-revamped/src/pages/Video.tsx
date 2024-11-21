import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import TextField_search from "../components/TextField-search";
import Cards from "../components/Cards";
import { useVideoData } from "../hooks/Api";
import { Loader } from "rsuite";

interface Video {
  "#TITLE": string;
  "#YEAR": number;
  "#IMG_POSTER": string;
  "#IMDB_ID": string;
}

export default function Video() {
  const { isLoading, error, data } = useVideoData();
  const [query, setQuery] = useState<string>("");

  const filteredData = data?.filter((video: Video) => {
    const titleMatch = video["#TITLE"]
      .toLowerCase()
      .includes(query.toLowerCase());
    const yearMatch = video["#YEAR"].toString().includes(query);
    return titleMatch || yearMatch;
  });

  if (isLoading) return <Loader backdrop content="loading..." vertical />;

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>;

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available.</div>;
  }

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
            width: "70%",
            color: "black",
            marginTop: "30px",
            marginBottom: "20px",
            textAlign: "center",
            marginInline: "auto",
          }}
        >
          <Typography variant="h3">React Videos</Typography>
          <Typography variant="h6">A brief history of React</Typography>
          <TextField_search
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
          <Typography
            variant="h6"
            sx={{ display: "flex", alignContent: "end" }}
          >
            {filteredData.length} videos
          </Typography>
        </div>

        <div>
          {filteredData.map((video: Video) => (
            <Cards
              key={video["#IMDB_ID"]}
              title={video["#TITLE"]}
              year={video["#YEAR"]}
              imgPoster={video["#IMG_POSTER"]}
            />
          ))}
        </div>
      </Card>
    </>
  );
}
