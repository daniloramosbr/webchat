import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Api from "../../controllers/Api";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function SignIn() {

  const [msglogin, setMsglogin] = useState(false)

  const [error, setError] = useState(false);

  const [loading ,setLoading] = useState(false)

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const HandleChange = (event: any) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }));
  };
  
  function SignUp () {

navigate('/webchat/signup')

}

  async function LoginUser () {

    if (!dataForm.email || !dataForm.password) {

      setError(true)

      setTimeout(()=> {

        setError(false)

      },3000)

      return
    }

setLoading(true)

  try {

    const res: any = await Api.ValidDados(dataForm.email, dataForm.password)

    Cookies.set('token', res.data)

    const decode: any = jwtDecode(res.data);

   navigate(`/webchat/${decode.user}`)
    
  } catch (error) {
    setMsglogin(true)
    setLoading(false)
    setTimeout(()=> {

      setMsglogin(false)

    },3000)

    return
  }
  }

  return (
    <div className="container">
      <div className="login-container">
        <main className="login-main">
          <div>
            <h1>FAÇA SEU LOGIN:</h1>
          </div>
          <form onSubmit={HandleChange} className="form-input">
            <div> <ion-icon name="mail-outline"></ion-icon>
              <input
                name="email"
                placeholder="Email:"
                onChange={HandleChange}
              />
            </div>
            <div> <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                name="password" type="password"
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
          {msglogin && (
            <div className="msg-error">
              <h3>ERRO: EMAIL OU SENHA INCORRETOS.</h3>
            </div>
          )}
          {loading && (<div className="load"><div className="custom-loader"></div></div>)}
          <div className="button-go">
            <button onClick={LoginUser}>FAZER LOGIN</button>
            <button onClick={SignUp}>AINDA NÃO TEM CONTA?</button>
          </div>

        </main>
      </div>
    </div>
  );
}
