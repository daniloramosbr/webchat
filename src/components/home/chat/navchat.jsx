import './chat.scss'
import { useContext, useState } from "react";
import { ContextJsx } from "../../../context/context";
import Api from '../../../controllers/Api';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

export default function Navchat() {

  const decode = jwtDecode(Cookies.get("token"));

  const myId = decode.id

  const { chatheigth, setChat, setChatheigth, setMsg, id } = useContext(ContextJsx);

  const [data, setData] = useState({})

  async function DelMSg () {

    try {

     const res = await Api.DeleteMsgs(myId, id)
      setChat(false)
      setChatheigth('0%')
      setData(res.data)
      setMsg(data)
    } catch (error) {
      
      console.log(error)
    }
  }

  return (
    <div className="navchat" style={{
      height: chatheigth,
      border: 0
    }}>
      <button onClick={()=>{
        setChat(false)
        setChatheigth('0%')
      }}>
        <h3>FECHAR CONVERSA</h3>
      </button>

      <button onClick={DelMSg}>
       <h3>APAGAR CONVERSA</h3>
      </button>
    </div>
  )
}
