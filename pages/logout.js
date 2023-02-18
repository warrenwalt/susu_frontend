const { useAuthStateContext } = require("../common/auth/context/AuthContext");

export default function Logout() {
  const { setUser, setToken } = useAuthStateContext();
  return (
    <button
      onClick={() => {
        setUser(null);
        setToken(null);
      }}
    >
      Logout
    </button>
  );
}
