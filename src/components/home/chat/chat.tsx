import { useEffect, useState } from "react";
import "./chat.scss";
import Api from "../../../controllers/Api";
import ChatOne from "./chatone";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { ContextJsx } from "../../../context/context";
import Navchat from "./navchat";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}

export default function Chat() {

  const token: any = Cookies.get("token")
  const decode: any = jwtDecode(token)
  const myId = decode.id
  const { user, id, msg, setMsg, setChatheigth, chatheigth } = useContext(ContextJsx);

  interface DataItem { 
    _id: string; 

    message: string; 

    user: string; 

    date : string; 
  } 

  const [allmsg, setAllmsg] = useState<DataItem[]>([]); 

  useEffect(() => {
    async function getmsg() {
      try {
        const res: any = await Api.GetMsgId(myId, id);
        setAllmsg(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getmsg();
  }, [user, msg]);

  const [text, setText] = useState("");

  const HandleChange = (event :any) => {
    setText(event.target.value);
  }

  if (text) {

    document.onkeydown = function(e) {
      if(e.key === 'Enter') {
        SendText()
      }
    }
  }
  async function SendText() {

    if (!text) {
      return
    }

    try {
      const dataHora = new Date();

      const dataHoraBrasil = dataHora.toLocaleString("pt-BR");

     const res = await Api.SendMsg(myId, id, text, dataHoraBrasil);

     setMsg(res)

     setText('')

    } catch (error) {

      console.log(error);
    }
  }

  return (
    <div>
      <div className="header-chat">
        <div className="chat-profile-info">
          <div>
            <ion-icon name="person"></ion-icon>
          </div>
          <h3>{user}</h3>
        </div>
        <div onClick={(()=> {
         setChatheigth(chatheigth === '30%' ? '0%' : '30%')
        })}>
          <ion-icon name="ellipsis-vertical-circle-outline"></ion-icon>
        </div>
      </div>
      <div className="msg-chat">
      <Navchat/>
        {allmsg.length > 0 && allmsg.map((res) => {
          return <ChatOne key={res._id} msg={res.message} id={res.user} date={res.date}/>;
        })} 
      </div>
      <div className="send-chat">
        <input
          type="text"
          placeholder="Digite uma mensagem"
          onChange={HandleChange}
          value={text} />
        <button onClick={SendText}>
          <ion-icon name="send-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
