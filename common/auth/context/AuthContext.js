import { createContext, useContext, useState } from "react";
import { serialize, parse } from "cookie";

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
      // set cookie on client side(browser)
      const serializedToken = serialize("ACCESS_TOKEN", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      document.cookie = serializedToken;
    } else {
      // remove cookie from client side (browser)
      document.cookie =
        "ACCESS_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
