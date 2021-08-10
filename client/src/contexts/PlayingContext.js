import { createContext, useState } from "react";

const PlayingContext = createContext();

const PlayingContextProvider = ({ children }) => {
  const [playing, setPlaying] = useState("");
  const [playList, setPlayList] = useState([]);

  return (
    <PlayingContext.Provider value={{ playing, setPlaying }}>
      {children}
    </PlayingContext.Provider>
  );
};

export { PlayingContext, PlayingContextProvider };
