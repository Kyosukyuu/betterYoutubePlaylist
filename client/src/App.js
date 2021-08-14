import Playlist from "./components/Playlist";
import { PlayingContextProvider } from "./contexts/PlayingContext";
import SelectedMusic from "./components/SelectedMusic";
import Header from "./components/Header";
import { Box, Container } from "@chakra-ui/react";

export default function App() {
  return (
    <PlayingContextProvider>
      <Box as="main" my={8}>
        <Container maxW="96em">
          <Header />
          <SelectedMusic />
          <Playlist />
        </Container>
      </Box>
    </PlayingContextProvider>
  );
}
