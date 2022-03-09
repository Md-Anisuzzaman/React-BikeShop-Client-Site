import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Explore from './Component/Explore/Explore';
import AuthProvider from './Component/Context/AuthProvider';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Header from './Component/Home/Header';
import AddProduct from './Component/AddProduct/AddProduct';
import MyOrders from './Component/MyOrders/MyOrders';
import DashBoard from './Component/DashBoard/DashBoard';
import Details from './Component/Details/Details';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Product from './Component/Product/Product';
import NotFound from './NotFound/NotFound';
import Test from './Component/Test/Test';
import Contact from './Component/Contact/Contact';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route exact path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
             <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/product">
              <Product></Product>
            </PrivateRoute>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/products/:productId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/test">
              <Test></Test>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            {/* <Route path="/footer">
              <Footer></Footer>
            </Route> */}
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
