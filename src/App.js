import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Shop from './Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import CartDetails from './CartDetails';
import MyNavBar from './MyNavBar';
import GoToPayment from './GoToPayment';
import {useEffect} from 'react';
import Slider from './Slider';
import About2 from './About2';
import Login from './Login';

function App() {
  useEffect(() => {
    <Route exact path="/" element={<Shop />}> </Route>
    

},[]);

  return (
    <div className="App">
      

      <Provider store={store}>
        <BrowserRouter>
        <MyNavBar></MyNavBar>
            <Routes>
            <Route exact path="/" element={<Login/>}></Route>
              <Route exact path="/Shop" element={<Shop />}> </Route>
              <Route exact path="/CartDetails" element={<CartDetails />}>  </Route>
              <Route exact path="/About" element={<Slider><About/><About2/></Slider>}>  </Route>
              <Route exact path="/GoToPayment" element={<GoToPayment />}>  </Route>
            </Routes>
          </BrowserRouter>
      </Provider>
     
    
    </div>
  );
}

export default App;
