import React, {useState, createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Apartments from './Component/Apartments/Apartments';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Details from './Component/Details/Details';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import PrivateRoute from './Component/Login/PrivateRoute';
import Login from './Component/Login/Login';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Header />
            <Apartments />
            <Services />
            <Footer />
          </Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/apartment/:name">
            <Details />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <h2>This is dashboard</h2>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;