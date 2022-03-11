import context from "../Context/Context";
import ".//Header.css";
import { useContext } from "react";
function Header() {
  const { loginData } = useContext(context);

  return <header className="loginName">{loginData.givenName}</header>;
}

export default Header;
