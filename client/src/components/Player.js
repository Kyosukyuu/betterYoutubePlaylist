import { Center, Skeleton } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";
import Youtube from "react-youtube";

export default function Player() {
  const { playing, setPlaying, status, allVideos } = useContext(PlayingContext);

  const opts = {
    width: "426",
    height: "240",
    playerVars: {
      autoplay: 1,
      // controls: 0,
    },
  };

  const playNext = () => {
    let nextVid = { ...allVideos.items[playing.pos + 1] };
    if (!allVideos.items[playing.pos + 1]) {
      nextVid = { ...allVideos.items[0] };
      setPlaying({ id: nextVid.contentDetails.videoId, pos: 0 });
    } else
      setPlaying({ id: nextVid.contentDetails.videoId, pos: playing.pos + 1 });
  };
  return (
    <Center m={5}>
      {/* <Box as={Youtube} videoId={playing} opts={opts} onEnd={_onEnd} /> */}
      <Skeleton
        isLoaded={status === "success" && playing.id ? true : false}
        width="100%"
        height="100%"
      >
        <Youtube videoId={playing.id} opts={opts} onEnd={playNext} />
      </Skeleton>
    </Center>
  );
}
