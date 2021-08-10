import { Box, Center } from "@chakra-ui/react";
import { useQuery } from "react-query";
import PlaylistItem from "./PlaylistItem";

const fetchData = async () => {
  const { REACT_APP_API_KEY } = process.env;
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20id%2C%20snippet%2C%20status&maxResults=1000&playlistId=PLwtwwDbdYBn5N0ZpTTc0BrTvqe1Jxj0rs&key=${REACT_APP_API_KEY}`
  );
  return res.json();
};

export default function Playlist() {
  const { data, status } = useQuery("playlist", fetchData);

  console.log(data);
  // console.log(status);

  return (
    <Center mx={10} my={10}>
      <Box
        as="article"
        sx={{ columnCount: [1, 1, 4, 6], gap: "30px" }}
        w="100%"
      >
        {data &&
          data.items.map((vid) => (
            <PlaylistItem key={vid.contentDetails.videoId} vid={vid} />
          ))}
      </Box>
    </Center>
  );
}
