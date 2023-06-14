import React from "react";
import { useState } from "react";
import { auth, app } from "../config/app";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const HandleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    props.setStatus(true);
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center items-center border-black border-2 w-2/3 h-600">
          <h1>Login</h1>
          <form
            onSubmit={HandleSignIn}
            className="flex flex-col items-center justify-center"
          >
            <label for="email" className="text-2xl border-1">
              Email
            </label>
            <input
              className="text-2xl "
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
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            ></input>
            <button>Login</button>
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
