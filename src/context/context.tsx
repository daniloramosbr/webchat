
import { createContext, useState } from "react";

let myVar: any;

export const ContextJsx = createContext(myVar);  

type TitleProps = {
    children: any;
  }
  
  export const ContextProvider: any = ({ children }: TitleProps) => {

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
          chatheigth,
          setChatheigth,
        }}
      >
        {children}
      </ContextJsx.Provider>
    );
}