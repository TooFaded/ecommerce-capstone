import AuthForm from "./AuthForm";
import loginImg from "../assets/loginImg.png";

function Login({ onSuccessfulLogin, setIsAuthenticated }) {
  const handleSuccessfulLogin = (message) => {
    setIsAuthenticated(true);
    onSuccessfulLogin(message);
  };

  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={true} onSuccess={handleSuccessfulLogin} />
      <div className="mt-20 flex justify-center">
        <img className="w-40" src={loginImg} alt="" />
      </div>
    </div>
  );
}

export default Login;
