import {
  MdRepeat,
  MdShuffle,
  MdSwapCalls,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import {
  Center,
  HStack,
  IconButton,
  useToast,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { PlayingContext } from "../contexts/PlayingContext";

export default function ActionsBar() {
  const {
    playing,
    setPlaying,
    allVideos,
    setAllVideos,
    playOptions,
    setPlayOptions,
    status,
  } = useContext(PlayingContext);

  const repeatToast = useToast();
  const shuffleToast = useToast();
  const reverseToast = useToast();
  const failPlayToast = useToast();

  const repeatVideo = () => {
    setPlayOptions({ ...playOptions, repeat: !playOptions.repeat });
    repeatToast({
      title: `Repeat is ${playOptions.repeat === false ? "on" : "off"}`,
      status: "info",
      duration: 2500,
      isClosable: true,
    });
  };

  const shufflePlaylist = () => {
    if (!allVideos.items) {
      shuffleToast({
        title: "No videos to shuffle",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    } else if (allVideos && allVideos.items && playing.pos !== -1) {
      setPlayOptions({ ...playOptions, shuffle: !playOptions.shuffle });
      shuffleToast({
        title: `Shuffle is ${playOptions.shuffle === false ? "on" : "off"}`,
        status: "info",
        duration: 2500,
        isClosable: true,
      });
    } else {
      shuffleToast({
        title: "Start playing to shuffle",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (
      !playOptions.shuffle &&
      allVideos &&
      allVideos.items &&
      status === "success"
    ) {
      const allVideosCopy = { ...allVideos };
      allVideosCopy.items = allVideosCopy.original;
      allVideosCopy.original = [];
      setAllVideos(allVideosCopy);

      const currentVid = allVideosCopy.items
        .map((vid, i) => {
          if (playing.id === vid.contentDetails.videoId) return i;
          return undefined;
        })
        .filter((vid) => typeof vid !== "undefined")[0];

      setPlaying({ ...playing, pos: currentVid });
    } else if (
      playOptions.shuffle &&
      allVideos &&
      allVideos.items &&
      status === "success"
    ) {
      const shuffled = [...allVideos.items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;

        const allVideosCopy = { ...allVideos };
        allVideosCopy.items = shuffled;
        allVideosCopy.original = allVideos.items;
        setAllVideos(allVideosCopy);

        const currentVid = shuffled
          .map((vid, i) => {
            if (playing.id === vid.contentDetails.videoId) return i;
            return undefined;
          })
          .filter((vid) => typeof vid !== "undefined")[0];

        setPlaying({ ...playing, pos: currentVid });
      }
    }
  }, [playOptions.shuffle]);

  const reversePlaylistOrder = () => {
    setPlayOptions({ ...playOptions, reverse: !playOptions.reverse });
    reverseToast({
      title: `Playing order is now ${
        playOptions.reverse === false ? "reversed" : "unreversed"
      }`,
      status: "info",
      duration: 2500,
      isClosable: true,
    });
  };

  const playNext = () => {
    if (allVideos && allVideos.items) {
      let nextVid = { ...allVideos.items[playing.pos + 1] };
      if (!allVideos.items[playing.pos + 1]) {
        nextVid = { ...allVideos.items[0] };
        setPlaying({ id: nextVid.contentDetails.videoId, pos: 0 });
      } else
        setPlaying({
          id: nextVid.contentDetails.videoId,
          pos: playing.pos + 1,
        });
    } else {
      failPlayToast({
        title: "No videos to play",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  const playPrev = () => {
    if (allVideos && allVideos.items) {
      let prevVid = { ...allVideos.items[playing.pos - 1] };
      if (!allVideos.items[playing.pos - 1]) {
        prevVid = { ...allVideos.items[allVideos.items.length - 1] };
        setPlaying({
          id: prevVid.contentDetails.videoId,
          pos: allVideos.items.length - 1,
        });
      } else
        setPlaying({
          id: prevVid.contentDetails.videoId,
          pos: playing.pos - 1,
        });
    } else {
      failPlayToast({
        title: "No videos to play",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  // STYLES
  const actionButtonColorScheme = useColorModeValue("blackAlpha", "gray");

  return (
    <Center>
      <HStack spacing={5} mb={4}>
        <IconButton
          icon={<Icon as={MdSkipPrevious} fontSize={50} />}
          aria-label="play-previous-video"
          title="Play Previous Video"
          onClick={playPrev}
          type="button"
          colorScheme={actionButtonColorScheme}
        />
        <IconButton
          icon={<Icon as={MdRepeat} fontSize={44} />}
          aria-label="repeat-video"
          title="Repeat Video"
          onClick={repeatVideo}
          type="button"
          colorScheme={
            playOptions.repeat ? "telegram" : actionButtonColorScheme
          }
        />
        <IconButton
          icon={<Icon as={MdShuffle} fontSize={42} />}
          aria-label="shuffle-playlist"
          title="Shuffle Playlist"
          onClick={shufflePlaylist}
          type="button"
          colorScheme={
            playOptions.shuffle ? "telegram" : actionButtonColorScheme
          }
        />
        <IconButton
          icon={<Icon as={MdSwapCalls} fontSize={42} />}
          aria-label="reverse-playlist"
          title="Reverse Playlist Order"
          onClick={reversePlaylistOrder}
          type="button"
          colorScheme={
            playOptions.reverse ? "telegram" : actionButtonColorScheme
          }
        />
        <IconButton
          icon={<Icon as={MdSkipNext} fontSize={50} />}
          aria-label="play-next-video"
          title="Play Next Video"
          onClick={playNext}
          type="button"
          colorScheme={actionButtonColorScheme}
        />
      </HStack>
    </Center>
  );
}
