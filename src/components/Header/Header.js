import { useGoogleAuth } from "../Login/GoogleAuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const googleAuth = useGoogleAuth();
  const username = googleAuth.isInitialized
    ? googleAuth.googleUser?.profileObj?.givenName ?? "Unknown user"
    : "";
  // useEffect(() => {
  //   if (googleAuth.isInitialized && !googleAuth.isSignedIn) {
  //     navigate("/");
  //   }
  // }, [googleAuth, navigate]);       when the user is sign out the page go back to login button
  return (
    <header className="header">
      <div className="loginName">{username}</div>
      {googleAuth.isSignedIn ? (
        <div className="signOut">
          <button onClick={googleAuth.signOut}>Sign out</button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
