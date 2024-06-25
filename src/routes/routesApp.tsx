import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../components/start/start";
import SignIn from "../components/login/signin";
import SignUp from "../components/login/signup";
import Home from "../components/home/homes/home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/webchat" element={<Start />} />
        <Route path="/webchat/signup" element={<SignUp />} />
        <Route path="/webchat/signin" element={<SignIn />} />
        <Route path="/webchat/:user" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
