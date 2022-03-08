import context from "../Login/LoginContext";
import { useContext } from "react";
function Header(name) {
  const { loginData } = useContext(context);

  return <header>{loginData.givenName}</header>;
}

export default Header;
