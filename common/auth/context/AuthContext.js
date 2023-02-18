import { createContext, useContext, useState } from "react";
import { serialize, parse } from "cookie";
import { setCookie, destroyCookie } from "next-cookies";
import Cookies from "js-cookie";

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
      Cookies.set("token", token, { expires: 7, path: "/" });
    } else {
      Cookies.remove("name", { path: "/" });
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
