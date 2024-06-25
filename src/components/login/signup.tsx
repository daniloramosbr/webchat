import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../../controllers/Api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function SignUp() {
  const [error, setError] = useState(false);

  const [loading ,setLoading] = useState(false)

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const HandleChange = (event: any) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }));
  };

  async function CreateUser() {
    if (!dataForm.email || !dataForm.password || !dataForm.username) {

      setError(true)

      setTimeout(()=> {

        setError(false)

      },3000)

      return
    }

    setLoading(true)

    try {
      const res: any = await Api.PostDados(
        dataForm.username,
        dataForm.email,
        dataForm.password
      );

      Cookies.set("token", res.data);

      const decode: any = jwtDecode(res.data);

      navigate(`/webchat/${decode.user}`);
    } catch (error) {
      console.log(error);
    }
  }

  function SignIn(){

navigate('/webchat/signin')

  }

  return (
    <div className="container">
      <div className="login-container">
        <main className="login-main">
        
            <h1>CRIE SUA CONTA:</h1>
         
          <form onSubmit={HandleChange} className="form-input">
            <div> <ion-icon name="person-outline"></ion-icon>
              <input 
                name="username" type="text"
                placeholder="Usuário:"
                onChange={HandleChange}
              />
            </div>
            <div> <ion-icon name="mail-outline"></ion-icon>
              <input
                name="email" type="email"
                placeholder="Email:"
                onChange={HandleChange}
              />
            </div>
            <div> <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                name="password"  type="password"
                placeholder="Senha:"
                onChange={HandleChange}
              />
            </div>
          </form>

          {error && (
            <div className="msg-error">
              <h3>POR FAVOR, PREENCHA TODOS OS CAMPOS.</h3>
            </div>
          )}

          {loading && (<div className="load"><div className="custom-loader"></div></div>)}

          <div className="button-go">
            <button onClick={CreateUser}>CRIAR CONTA</button>
            <button onClick={SignIn}>JÁ TEM UMA CONTA?</button>
          </div>
         
        </main>
      </div>
    </div>
  );
}
