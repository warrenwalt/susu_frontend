import Link from "next/link";
import { useRef, useState } from "react";
import axiosInstance from "../lib/axios";

const { useAuthStateContext } = require("../common/auth/context/AuthContext");

export default function Login() {
  const { setUser, setToken } = useAuthStateContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosInstance
      .post("/login", payload)
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        setToken(res.data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <>
      <h1>Login</h1>
      {errors && (
        <div className="alert">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="email address" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Login</button>
        <Link href="/register">Register</Link>
        <br />
      </form>
    </>
  );
}
