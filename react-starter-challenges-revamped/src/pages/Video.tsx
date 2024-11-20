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
          marginTop: "-12px",
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
          <TextField_search />
          <Typography variant="h6">{data.length} videos</Typography>
        </div>

        {data.map((video: Video) => (
          <Cards
            key={video["#IMDB_ID"]}
            title={video["#TITLE"]}
            year={video["#YEAR"]}
            imgPoster={video["#IMG_POSTER"]}
          />
        ))}
      </Card>
    </>
  );
}
