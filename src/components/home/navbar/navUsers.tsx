import "./navUsers.scss";
import { useContext, useEffect, useState } from "react";
import { ContextJsx } from "../../../context/context";
import Api from "../../../controllers/Api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Users from "./users";

interface DataItem { 

  _id: string; 
  message: string; 
  user: string; 
  date : string; 
} 

export default function NavUsers() {
    
  const token: any = Cookies.get("token")
  const decode: any = jwtDecode(token);

  const [data, setData] = useState<DataItem[]>([]); 
  const { width, setWidth } = useContext(ContextJsx);

  useEffect(()=> {

  async function getUsers() {

    try {

      const res: any = await Api.GetUsers(decode.id)
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

        {data.length >= 1 && data.map((res: any)=>{

          return (
            <Users key={res._id} user={res.username} id={res._id}/>
          )

        })}

      </div>
    </nav>
  );
}
