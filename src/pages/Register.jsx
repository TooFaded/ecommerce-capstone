import AuthForm from "./AuthForm";
import registerImg from "../assets/registerImg.png";

function Register() {
  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={false} />
      <div className="mt-20 flex justify-center">
        <img className="w-40" src={registerImg} alt="" />
      </div>
    </div>
  );
}

export default Register;
