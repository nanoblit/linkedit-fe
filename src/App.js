import React from "react";
import { Route } from "react-router";
import { toast } from "react-toastify";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  toast.configure();
  return (
    <div className="App">
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </div>
    </div>
  );
};

export default App;
