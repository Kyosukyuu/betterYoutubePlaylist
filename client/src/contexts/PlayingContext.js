import { createContext, useState } from "react";
import { useQuery } from "react-query";

const PlayingContext = createContext();

const fetchData = async () => {
  const { REACT_APP_API_KEY } = process.env;
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20id%2C%20snippet%2C%20status&maxResults=1000&playlistId=PLwtwwDbdYBn5N0ZpTTc0BrTvqe1Jxj0rs&key=${REACT_APP_API_KEY}`
  );
  return res.json();
};

const PlayingContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState("");
  const [playList, setPlayList] = useState({});

  const { data: videos, status } = useQuery("playlist", fetchData);
  console.log(videos);

  return (
    <PlayingContext.Provider
      value={{ playing, setPlaying, playList, setPlayList, videos }}
    >
      {children}
    </PlayingContext.Provider>
  );
};

export { PlayingContext, PlayingContextProvider };
