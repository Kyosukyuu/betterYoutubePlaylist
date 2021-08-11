import Playlist from "./components/Playlist";
import UrlForm from "./components/UrlForm";
import ToggleTheme from "./components/ToggleTheme";
import Player from "./components/Player";
import { PlayingContextProvider } from "./contexts/PlayingContext";

const fetchData = async () => {
  const { REACT_APP_API_KEY } = process.env;
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20id%2C%20snippet%2C%20status&maxResults=1000&playlistId=PLwtwwDbdYBn5N0ZpTTc0BrTvqe1Jxj0rs&key=${REACT_APP_API_KEY}`
  );
  return res.json();
};

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
