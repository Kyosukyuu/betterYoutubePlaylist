import { PlayingContext } from "../contexts/PlayingContext";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useContext, useEffect, useState } from "react";
import { Box, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import Player from "./Player";

export default function SelectedMusic() {
  const { playing, allVideos, setAllVideos } = useContext(PlayingContext);
  const [currentlyPlaying, setCurrentlyPlaying] = useState();

  useEffect(() => {
    let selected;
    if (allVideos && allVideos.items) {
      selected = allVideos.items.filter(
        (video) => video.contentDetails.videoId === playing.id
      );
      setCurrentlyPlaying(selected[0]);
    }
  }, [allVideos, setAllVideos, playing.id]);

  // STYLES
  const bg = useColorModeValue("white", "gray.700");

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
            <Text></Text>
          </VStack>
        )}
        {!currentlyPlaying && (
          <VStack>
            <Flex as="header" flexDirection="column" p={4}>
              <Heading size="2xl" mb={2}>
                No music playing
              </Heading>
              <Text>Enter a playlist to begin</Text>
            </Flex>
            <Text></Text>
          </VStack>
        )}
      </Flex>
    </Box>
  );
}
