import './App.css';
import ForgotPassword from './ForgotPassword';
import Login from './Login'
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
