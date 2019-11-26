import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
      <ToastContainer />
    </div>
  );
};

export default Login;
