import context from "../Context/Context";
import { useState } from "react";

function ContextProvider({ children }) {
  const [loginData, setLoginData] = useState(null);
  return (
    <context.Provider value={{ loginData, setLoginData }}>
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
