import { useGoogleAuth } from "../Login/GoogleAuthProvider";
import "./Header.css";
function Header() {
  const { isInitialized, googleUser } = useGoogleAuth();
  const username = isInitialized
    ? googleUser?.profileObj?.givenName ?? "Unknown user"
    : "";

  return <header className="loginName">{username}</header>;
}

export default Header;
