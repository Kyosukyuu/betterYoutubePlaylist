import { Center, Box } from "@chakra-ui/react";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";
import Youtube from "react-youtube";

export default function Player() {
  const { playing, setPlaying } = useContext(PlayingContext);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onEnd = () => {
    console.log("ended");
  };

  return (
    <Center m={5}>
      <Youtube videoId={playing} opts={opts} onEnd={_onEnd} />
    </Center>
  );
}
