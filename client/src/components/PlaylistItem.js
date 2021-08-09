import { Box, Image, Heading } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";

export default function PlaylistItem({ vid }) {
  const { playing, setPlaying } = useContext(PlayingContext);
  // console.log(vid);

  const playVideo = () =>
    setPlaying(`https://www.youtube.com/watch?v=${vid.contentDetails.videoId}`);

  return (
    <Box onClick={playVideo}>
      <Image src={vid.snippet.thumbnails.medium.url} w="100%" />
      <Heading>{vid.snippet.videoOwnerChannelTitle}</Heading>
    </Box>
  );
}
