import React, { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
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
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_URL}/register`, {
          username,
          password
        });
        history.push("/login");
        toast.success("You've been registered successfully");
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Couldn't register");
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={register}>
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
        {/* <label htmlFor="email">Email</label>
        <input id="email" type="email" required /> */}
        <div className="form-group">
          <div className="form-row">
            <div className="col">
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
            <div className="col">
              <label htmlFor="repeat-password">Repeat password</label>
              <input
                ref={repeatedPasswordRef}
                className="form-control"
                id="repeat-password"
                type="password"
                placeholder="Repeat password"
                required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

Register.propTypes = {
  history: PropTypes.object.isRequired
};

export default Register;
