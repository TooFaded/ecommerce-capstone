import AuthForm from "./AuthForm";
import loginImg from "../assets/loginImg.png";

function Login() {
  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={true} />
      <div className="mt-20 flex justify-center">
        <img className="w-40" src={loginImg} alt="" />
      </div>
    </div>
  );
}

export default Login;
