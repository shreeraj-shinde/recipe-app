import React from "react";
import { useState } from "react";
import { auth } from "../config/app";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const HandleSignUp = (e) => {
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
  };
  return (
    <div>
      <form onSubmit={HandleSignUp}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
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
  );
};

export default SignUp;
