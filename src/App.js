import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MyOrders from './components/MyOrders/MyOrders';
import Login from './components/Login/Login';
import AllOrders from './components/AllOrders/AllOrders';
import NotFound from './components/NotfoundPage/NotFound';
import AuthProvider from './AuthContext/AuthContex';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Switch>
            <Route exact path="/">
              <Home></Home>



            </Route>
            <PrivateRoute exact path="/orders">
              <MyOrders></MyOrders>


            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>



            </Route>
            <PrivateRoute exact path="/allOrders">
              <AllOrders></AllOrders>


            </PrivateRoute>
            <Route exact path="/contact">


            </Route>
            <Route>
              <NotFound></NotFound>

            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
