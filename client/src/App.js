import { QueryClient, QueryClientProvider } from "react-query";
import Playlist from "./components/Playlist";
import UrlForm from "./components/UrlForm";
import ToggleTheme from "./components/ToggleTheme";
import Player from "./components/Player";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToggleTheme />
      <UrlForm />
      <Player />
      <Playlist />
    </QueryClientProvider>
  );
}
