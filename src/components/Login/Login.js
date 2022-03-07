import GoogleLogin from "react-google-login";

function Login() {
  const customStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-100px",
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
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

export default Login;
