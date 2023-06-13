import React from "react";

const login = () => {
  return (
    <div>
      <form>
        <input type="email" id="email" name="email" placeholder="email"></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
        ></input>
        <button>Login</button>
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default login;
