import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
