import { createContext, useContext, useState } from "react";
import { serialize, parse } from "cookie";
import { setCookie, destroyCookie } from "next-cookies";

const AuthContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(null);
  const [notification, _setNotification] = useState(null);

  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification(null);
    }, 3000);
  };

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        notification,
        setUser,
        setToken,
        setNotification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthStateContext = () => useContext(AuthContext);
