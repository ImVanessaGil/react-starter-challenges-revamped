import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useVideoData = () => {
  return useQuery({
    queryKey: ["videoData"],
    queryFn: async () => {
      const response = await axios.get(
        "https://search.imdbot.workers.dev/?q=react"
      );

      return response.data.description;
    },
  });
};
