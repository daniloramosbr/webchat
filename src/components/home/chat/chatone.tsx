import "./chat.scss";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DataType {
  msg: string;
  date: string;
  id: string;
}

export default function ChatOne({ msg, date, id }: DataType) {

  const token: any = Cookies.get("token")

  const decode: any = jwtDecode(token);

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
