import Playlist from "./components/Playlist";
import UrlForm from "./components/UrlForm";
import ToggleTheme from "./components/ToggleTheme";
import Player from "./components/Player";
import { PlayingContextProvider } from "./contexts/PlayingContext";

export default function App() {
  return (
    <PlayingContextProvider>
      <ToggleTheme />
      <UrlForm />
      <Player />
      <Playlist />
    </PlayingContextProvider>
  );
}
