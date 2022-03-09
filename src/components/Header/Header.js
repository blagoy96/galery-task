import context from "../Context/Context";
import ".//Header.css";
import { useContext } from "react";
function Header() {
  const { loginData } = useContext(context);

  return (
    <>
      <header>
        <div className="loginName">{loginData.givenName}</div>
      </header>
    </>
  );
}

export default Header;
