import React from 'react';
import { Route } from 'react-router';
import { toast } from 'react-toastify';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  toast.configure();
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
    </div>
  );
}

export default App;
