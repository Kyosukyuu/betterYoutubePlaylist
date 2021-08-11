import { Box, Image, Heading } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function PlaylistItem({ vid }) {
  const { playing, setPlaying } = useContext(PlayingContext);
  // console.log(vid);

  const playVideo = () => {
    setPlaying(vid.contentDetails.videoId);
  };

  // STYLES
  const bg = useColorModeValue("white", "gray.600");

  return (
    <Box onClick={playVideo} boxShadow="lg" p={3} bg={bg} m={3}>
      <Image src={vid.snippet.thumbnails.medium.url} w="100%" />
      <Heading size="md">{vid.snippet.title}</Heading>
    </Box>
  );
}
