import Link from "next/link";
import { useRef, useState } from "react";
import { useAuthStateContext } from "../common/auth/context/AuthContext";
import axiosInstance from "../lib/axios";

export default function Register() {
  const { setUser, setToken } = useAuthStateContext();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosInstance
      .post("/signup", payload)
      .then((resp) => {
        setUser(resp.data.user);
        setToken(resp.data.token);
        console.log("SUCCESS!! user", resp.data.user);
        console.log("SUCCESS!! token", resp.data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <div>
      <h1>Register</h1>
      {errors && (
        <div className="alert">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" ref={nameRef} />

        <label htmlFor="email">email</label>
        <input type="email" placeholder="email" ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          ref={passwordRef}
        />

        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="confirm password"
          ref={passwordConfirmationRef}
        />

        <button type="submit">Register</button>

        <Link href="/register">Login</Link>
      </form>
    </div>
  );
}
