import { PlayingContext } from "../contexts/PlayingContext";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdPlayCircleFilled } from "react-icons/md";
import Player from "./Player";
import ActionsBar from "./ActionsBar";

export default function SelectedMusic() {
  const { playing, setPlaying, allVideos, setAllVideos } =
    useContext(PlayingContext);
  const [currentlyPlaying, setCurrentlyPlaying] = useState();

  useEffect(() => {
    if (allVideos && allVideos.items)
      setCurrentlyPlaying(allVideos.items[playing.pos]);
  }, [allVideos, setAllVideos, playing.pos]);

  // STYLES
  const bg = useColorModeValue("white", "gray.700");

  const playNow = () => {
    setPlaying({
      id: allVideos.items[0].contentDetails.videoId,
      pos: 0,
    });
  };

  return (
    <Box boxShadow="md" bg={bg} mt={6} rounded="sm">
      <Flex
        alignItems={["flex-start", "flex-start", "center", "center"]}
        flexDirection={["column", "column", "row", "row"]}
        as="section"
      >
        <Player />
        {currentlyPlaying && (
          <VStack>
            <Flex as="header" flexDirection="column" p={4}>
              <Heading size="2xl" mb={2}>
                {currentlyPlaying.snippet.title}
              </Heading>
              <Text>
                Created by {currentlyPlaying.snippet.videoOwnerChannelTitle}
              </Text>
            </Flex>
          </VStack>
        )}
        {!currentlyPlaying && (
          <VStack>
            <Flex as="header" flexDirection="column" alignItems="start" p={4}>
              <Heading size="2xl" mb={2}>
                No music playing
              </Heading>
              <Text>Enter a playlist to begin</Text>
              {playing.pos === -1 && allVideos && allVideos.items && (
                <Button
                  colorScheme="green"
                  onClick={playNow}
                  mt={4}
                  leftIcon={<Icon as={MdPlayCircleFilled} fontSize={24} />}
                >
                  Play Now!
                </Button>
              )}
            </Flex>
          </VStack>
        )}
      </Flex>
      <ActionsBar />
    </Box>
  );
}