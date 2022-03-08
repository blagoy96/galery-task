import GoogleLogin from "react-google-login";
import context from "./LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { setLoginData } = useContext(context);
  const customStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-100px",
  };
  const handleLogin = (googleData) => {
    setLoginData(googleData.profileObj);
    navigate("/gallery");
  };
  const handleFailure = (result) => {
    alert(result);
  };
  return (
    <>
      <GoogleLogin
        render={(renderProps) => (
          <div style={customStyle}>
            <button onClick={renderProps.onClick}>login</button>
          </div>
        )}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePravicy={"single_host_origin"}
      ></GoogleLogin>
    </>
  );
}

export default LoginPage;
