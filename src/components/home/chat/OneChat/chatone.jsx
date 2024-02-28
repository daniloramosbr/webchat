import "./chatone.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function ChatOne({ msg, date, id }) {
  const decode = jwtDecode(Cookies.get("token"));
  const [read, setRead] = useState(false);

  const data = date.split(" ");

  const messageClass = id === decode.id ? "send" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <p>
        {msg}
        <span>{data[1]}</span>
        <span className="ion">
          <ion-icon name="checkmark-outline"></ion-icon>
        </span>
      </p>
    </div>
  );
}
