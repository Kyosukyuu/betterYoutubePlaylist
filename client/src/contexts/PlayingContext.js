import { createContext, useState } from "react";
import { useQuery } from "react-query";
import fetchData from "../helpers/fetchData";

const PlayingContext = createContext();

const PlayingContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState({ id: "", pos: -1 });
  const [playList, setPlayList] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [playlistID, setPlaylistID] = useState("");

  const { data, status } = useQuery(
    ["playlist", { nextPageToken: "", playlistID }],
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: true,
      onSuccess: (res) => {
        setAllVideos(res);
      },
    }
  );

  console.log(data);

  return (
    <PlayingContext.Provider
      value={{
        playing,
        setPlaying,
        playList,
        setPlayList,
        status,
        allVideos,
        setAllVideos,
        playlistID,
        setPlaylistID,
      }}
    >
      {children}
    </PlayingContext.Provider>
  );
};

export { PlayingContext, PlayingContextProvider };
