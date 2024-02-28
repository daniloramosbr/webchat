import { createContext, useState } from "react";

export const ContextJsx = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [chat, setChat] = useState(false);
  const [msg, setMsg] = useState("");
  const [width, setWidth] = useState("0%");
  const [chatheigth, setChatheigth] = useState("0%");

  return (
    <ContextJsx.Provider
      value={{
        user,
        setUser,
        id,
        setId,
        chat,
        setChat,
        msg,
        setMsg,
        width,
        setWidth,
        chatheigth,setChatheigth
      }}
    >
      {children}
    </ContextJsx.Provider>
  );
};
