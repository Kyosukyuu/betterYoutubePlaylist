import { Center } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { PlayingContext } from "../contexts/PlayingContext";
import { useContext } from "react";

export default function Player() {
  const { playing } = useContext(PlayingContext);

  return (
    <Center m={5}>
      <ReactPlayer
        url={playing}
        controls
        onEnded={() => {
          console.log("test");
        }}
      />
    </Center>
  );
}
