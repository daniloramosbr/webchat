import "./navUsers.scss";
import { useContext } from "react";
import { ContextJsx } from "../../../context/context";

interface DataItem {
  user: string;
  id: string;
}

export default function Users({ user, id }: DataItem) {
  
  const { setUser, setId, setChat, setWidth } = useContext(ContextJsx);

  const ClassUser = user == "Danilo Ramos" ? "creator" : "user";

  function GoUser() {

    setUser(user);
    setId(id);
    setChat(true);
    setWidth("0%");
  }

  return (
    <div className={`cont-users ${ClassUser}`} onClick={GoUser}>
      <div>
        <ion-icon name="person" aria-hidden="true"></ion-icon>
      </div>
      <h2>{user}</h2>

      <h2 className="dev">- DESENVOLVEDOR</h2>
    </div>
  );
}
