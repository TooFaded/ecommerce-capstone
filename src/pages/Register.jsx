import AuthForm from "./AuthForm";

function Register() {
  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={false} />
    </div>
  );
}

export default Register;
