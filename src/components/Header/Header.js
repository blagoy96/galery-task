import { useGoogleAuth } from "../Login/GoogleAuthProvider";
import "./Header.css";
function Header() {
  const { isInitialized, googleUser, isSignedIn } = useGoogleAuth();
  const username = isInitialized
    ? googleUser?.profileObj?.givenName ?? "Unknown user"
    : "";

  return (
    <header className="header">
      <div className="loginName">{username}</div>
      {isSignedIn ? (
        <div className="signOut">
          <button>Sign out</button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
