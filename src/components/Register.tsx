import React from "react";

const Register: React.FC = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <button type="submit">Login</button>
        <input id="repeat-password" type="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
