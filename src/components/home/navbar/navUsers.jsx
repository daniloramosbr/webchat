import "./navUsers.scss";
import { useContext, useEffect, useState } from "react";
import { ContextJsx } from "../../../context/context";
import Api from "../../../controllers/Api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Users from "./users";

export default function NavUsers() {
  const decode = jwtDecode(Cookies.get("token"));
  const [data, setData] = useState({})
  const { width, setWidth } = useContext(ContextJsx);

  useEffect(()=> {

  async function getUsers() {

    try {

      const res = await Api.GetUsers(decode.id)
      setData(res.data)
            
    } catch (error) {
      console.log(error)
    }

    }

    getUsers()

  },[width])

  return (
    <nav
      className="nav"
      style={{
        width: width,
      }}
    >
      <div className="exit-nav">
        <button
          onClick={() => {
            setWidth("0%");
          }}
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <div>NOVA CONVERSA</div>
      </div>
      <h3>USUÁRIOS:</h3>

      <div className="users">

        {data.length >= 1 && data.map((res)=>{

          return (
            <Users key={res._id} user={res.username} id={res._id}/>
          )

        })}

      </div>
    </nav>
  );
}
