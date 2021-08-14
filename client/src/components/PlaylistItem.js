import { Tr, Td } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function PlaylistItem({ vid, index }) {
  const { playing, setPlaying } = useContext(PlayingContext);

  const playVideo = () => {
    setPlaying(() => ({
      id: vid.contentDetails.videoId,
      pos: index,
    }));
  };

  const isoDate = new Date(vid.contentDetails.videoPublishedAt);
  const convertedDate =
    isoDate.getMonth() +
    1 +
    "/" +
    isoDate.getDate() +
    "/" +
    isoDate.getFullYear();

  // STYLES
  const bg = useColorModeValue("white", "gray.700");
  const selectedColor = useColorModeValue("purple.700", "purple.200");

  return (
    <Tr
      onClick={playVideo}
      p={3}
      cursor="pointer"
      bg={bg}
      color={playing.id === vid.contentDetails.videoId && selectedColor}
      fontWeight={playing.id === vid.contentDetails.videoId && "bold"}
      verticalAlign="top"
    >
      <Td fontStyle="italic">{index}.</Td>
      <Td>{vid.snippet.title}</Td>
      <Td>{vid.snippet.videoOwnerChannelTitle}</Td>
      <Td isNumeric>{convertedDate}</Td>
    </Tr>
  );
}
