import "./start.css";
import { useNavigate } from "react-router-dom";

export default function Start() {

  const navigate = useNavigate()

  function GoSignUp () {

    navigate('/webchat/signup')

  }

  function GoSignIn () {

    navigate('/webchat/signin')
    
  }

  return (
    <div className="container">
      <div className="start-container">
        <main className="start-main">
          
          <div>
          <h1>WEBCHAT</h1>
          <ion-icon name="chatbubble-ellipses"></ion-icon>
          </div>

          <div className="button-cont">
            <div>
              <button onClick={GoSignUp}>CRIAR NOVA CONTA</button>
            </div>

            <div>
              <button onClick={GoSignIn}>FAZER LOGIN</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
