import { QueryClient, QueryClientProvider } from "react-query";
import Playlist from "./components/Playlist";
import ReactPlayer from "react-player";
import { PlayingContext } from "./contexts/PlayingContext";
import { useContext } from "react";

const queryClient = new QueryClient();

export default function App() {
  const { playing } = useContext(PlayingContext);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactPlayer url={playing} controls />
      <Playlist />
    </QueryClientProvider>
  );
}
