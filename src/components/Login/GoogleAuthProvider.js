import React, { useEffect } from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

export default function GoogleAuthProvider({ children }) {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  );
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);