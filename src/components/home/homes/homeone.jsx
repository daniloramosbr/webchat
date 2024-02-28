import "./home.css";
import { ContextJsx } from "../../../context/context";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function Homeone({ username, msg, id, lastmsg }) {

  const decode = jwtDecode(Cookies.get("token"));
  const { setId, setUser, setChat, user } = useContext(ContextJsx);

  async function InfoChat() {
    setUser(username);
    setId(id);
    setChat(true);
  }

  const messageClass = lastmsg === decode.id ? "send" : "received";

  const ChatUser = username === user ? 'user' : 'no'

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
