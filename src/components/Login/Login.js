import React, { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Login = ({ history }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const login = async e => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = usernameRef.current.value;

    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/login`, {
        username,
        password
      });
      localStorage.setItem("token", res.data.token);
      history.push("/");
      toast.success("You've been logged in successfully");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Couldn't log in");
      }
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            className="form-control"
            id="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            className="form-control"
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default Login;
