import React from "react";
import { useState } from "react";
import { auth, app } from "../config/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate("");

  const HandleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/home");
        props.setStatus(true);
        // ...
      })
      .catch((error) => {
        alert("invalid Credentials");
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col gap-7 justify-center items-center border-black border-2 w-1/3 h-600 align-middle mt-50%">
          <h1>Login</h1>
          <a href="signup">new user?</a>
          <form onSubmit={HandleSignIn} className="flex flex-col gap-5 p-3">
            <label for="email" className="text-2xl border-1">
              Email
            </label>
            <input
              className="text-2xl border-black border-2 w-full rounded-sm p-2 rounded-lg"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label for="password" className="text-2xl ">
              Password
            </label>
            <input
              className="text-2xl border-black border-2 rounded-lg w-full p-2"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            ></input>
            <button className="border-2 border-black p-2 rounded-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
