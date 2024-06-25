import "./home.scss";
import Homeone from "./homeone";
import Cookies from "js-cookie";
import Chat from "../chat/chat";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Api from "../../../controllers/Api";
import { useContext } from "react";
import { ContextJsx } from "../../../context/context";
import { useNavigate } from "react-router-dom";
import NavUsers from "../navbar/navUsers";

interface DataItem { 

  _id: string; 
  message: string; 
  user: string; 
  date : string; 
} 
 
export default function Home() {

  const token: any = Cookies.get("token")
  const decode: any = jwtDecode(token);
  const navigate = useNavigate()

  const [data, setData] = useState<DataItem[]>([]); 

  const [loading, setLoading] = useState(true); //mostra loading
  const [empty, setEmpty] = useState(false); //mostra se n tiver msgs
  const {chat, msg, setChat, setWidth, setUser} = useContext(ContextJsx)
  
  useEffect(() => {
    async function getMsg() {
      setLoading(true);

      try {
        const res: any = await Api.GetAllMsg(decode.id);

        setData(res.data);

        if (res.data.length == 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getMsg();
  }, [msg]);

  function LogOut () {

    Cookies.remove('token')
    setChat(false)
    navigate('/webchat')
  
  }

  document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        setChat(false)
        setUser('')
    }
  }

  return (
    <main className="container-chat">
      <div className="profile-chat">
        <div className="cont-header">
          <div className="profile">
            <div>
              <ion-icon name="person"></ion-icon>
            </div>
            <h3>{decode.user}</h3>
          </div>
        <div className="buttons">

        <button className="butt-msg" onClick={(()=>{
          setWidth('30%')
        })}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </button>

        <button className="butt-msg" onClick={LogOut}>
            <ion-icon name="log-out-outline"></ion-icon>
        </button>
        </div>
        </div>
        <div className="homeone">
        <NavUsers/>
                {loading ? (
            <div className="msg">
              <div className="custom-loader"></div>
            </div>
          ) :  data.map((res: any) => {
            return (
              <Homeone
                key={res.msg._id}
                username={res.username}
                msg={res.msg.message}
                id={res.userid}
                lastmsg={res.msg.user}
              
              />
            );
          })
          
}
          {empty && (
            <div className="msg">
               <div><ion-icon name="sad"></ion-icon></div>
              <h3>VOCÊ AINDA NÃO TEM CONVERSAS</h3>
              <button className="but-msg" onClick={()=>{

                setWidth('30%')

              }}>INICIAR CONVERSA</button>
            </div>


          )}
        </div>
      </div>

      <div className="chat-ofc">

        {chat ? (
          <Chat />
        ) : (
          <div className="inc-msg">
             <ion-icon name="chatbubble-ellipses"></ion-icon>
            <h3>ESCOLHA UMA CONVERSA</h3>
          </div>
        )}
        
      </div>
    </main>
  );
}
