import "./home.scss";
import { ContextJsx } from "../../../context/context";
import { useContext } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DataType {

  username: string;
  msg: string;
  id: string;
  lastmsg: string;
}

export default function Homeone({ username, msg, id, lastmsg }: DataType) {

  const token: any = Cookies.get("token")
  const decode: any = jwtDecode(token);

  const { setId, setUser, setChat, user } = useContext(ContextJsx);

  async function InfoChat() {
    setUser(username);      
    setId(id);
    setChat(true);
  }
  const messageClass = lastmsg === decode.id ? "send" : "received";

  const ChatUser = username === user && 'user'       //so da true se a funçao acima for executada

  return (
    <main className={`info-chat ${ChatUser}`} onClick={InfoChat}>
      <div className="cont-profile">
        <div className="icon-profile">
          <ion-icon name="person" aria-hidden="true"></ion-icon>
        </div>
        <div>
          <h2>{username}</h2>
          <span>{msg}</span>
        </div>
      </div>
      <div className={`read ${messageClass}`}>
        <span className="ionn">
          <ion-icon name="checkmark-outline"></ion-icon>
        </span>
        <span className="msg-read">
          <ion-icon name="mail-unread-outline"></ion-icon>
        </span>
      </div>
    </main>
  );
}
