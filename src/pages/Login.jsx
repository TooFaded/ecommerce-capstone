import AuthForm from "./AuthForm";

function Login() {
  return (
    <div className="h-[80vh] flex flex-col">
      <AuthForm isLogin={true} />
    </div>
  );
}

export default Login;
