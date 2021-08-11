import { Box, Center, Grid } from "@chakra-ui/react";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { PlayingContext } from "../contexts/PlayingContext";

export default function Playlist() {
  const { videos } = useContext(PlayingContext);

  return (
    <Center mx={10} my={10}>
      <Box
        as="article"
        sx={{ columnCount: [1, 1, 4, 6], gap: "30px" }}
        w="100%"
      >
        {videos &&
          videos.items.map((vid) => (
            <PlaylistItem key={vid.contentDetails.videoId} vid={vid} />
          ))}
      </Box>
    </Center>
  );
}
