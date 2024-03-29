import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
// import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function HomePage(){
  return(
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

function CheckoutPage(){
  return(
    <div>
      <Header/>
      <Checkout/>
    </div>
  )
}