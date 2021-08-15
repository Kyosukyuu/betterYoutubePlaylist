import { Center, Skeleton } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";
import Youtube from "react-youtube";

export default function Player() {
  const { playing, setPlaying, status, allVideos, playOptions } =
    useContext(PlayingContext);

  const opts = {
    width: "426",
    height: "240",
    playerVars: {
      autoplay: 1,
      // controls: 0,
    },
  };

  const playNext = (data) => {
    if (playOptions.repeat) {
      data.target.playVideo();
    } else {
      if (!playOptions.reverse) {
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
      }
    }
  };

  return (
    <Center m={5} boxShadow="md">
      <Skeleton
        isLoaded={status === "success" && playing.id ? true : false}
        width="100%"
        height="100%"
      >
        {status === "success" && (
          <Youtube videoId={playing.id} opts={opts} onEnd={playNext} />
        )}
      </Skeleton>
    </Center>
  );
}
