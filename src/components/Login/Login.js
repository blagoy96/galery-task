import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "./GoogleAuthProvider";

function LoginPage() {
  const googleAuth = useGoogleAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (googleAuth.isInitialized && googleAuth.isSignedIn) {
      navigate("/gallery");
    }
  }, [googleAuth, navigate]);

  return (
    <>
      {googleAuth.isInitialized && !googleAuth.isSignedIn && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            marginTop: "-50px",
            marginLeft: "-100px",
          }}
        >
          <button onClick={googleAuth.signIn}>login</button>
        </div>
      )}
    </>
  );
}

export default LoginPage;
