import React, { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Register = ({ history }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatedPasswordRef = useRef(null);

  const register = async e => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const repeatedPassword = repeatedPasswordRef.current.value;

    if (password !== repeatedPassword) {
      toast.error("Passwords must be the same.");
    }
    try {
      await axios.post(`${process.env.REACT_APP_URL}/register`, {
        username,
        password
      });
      history.push("/login");
      toast.success("You've been registered successfully");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="username">Username</label>
        <input ref={usernameRef} id="username" type="text" required />
        {/* <label htmlFor="email">Email</label>
        <input id="email" type="email" required /> */}
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} id="password" type="password" required />
        <input
          ref={repeatedPasswordRef}
          id="repeat-password"
          type="password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.object.isRequired
};

export default Register;
