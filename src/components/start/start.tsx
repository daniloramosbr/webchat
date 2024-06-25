import "./start.scss";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  function GoSignUp() {
    navigate("/webchat/signup");
  }

  return (
    <div className="start-container">
       <div className="header">
          <h1>WEBCHAT</h1>
          <span>Webchat que possui um sistema de login e autenticação para segurança dos usuários. Após o login, os usuários podem enviar mensagens de texto, ver outros usúarios que se inscreveram, e outras funcionalidades que um chat possui.</span>
          <div className="button-cont">
          <button onClick={GoSignUp}>INICIAR</button>
       </div>
        </div>
      <div className="start-img">
       <img src="logo.png" alt="webchatlogo" />
      </div>
    </div>
  );
}
