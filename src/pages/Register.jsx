import AuthForm from "./AuthForm";
import registerImg from "../assets/registerImg.png";
import { useNavigate } from "react-router-dom";

function Register({ onSuccessfulRegister, setIsAuthenticated }) {
  const navigate = useNavigate();
  const handleSuccessfulRegister = (message) => {
    setIsAuthenticated(true);
    onSuccessfulRegister(message);
    navigate("/profile");
  };
  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={false} onSuccess={handleSuccessfulRegister} />
      <div className="mt-20 flex justify-center">
        <img className="w-40" src={registerImg} alt="" />
      </div>
    </div>
  );
}

export default Register;
