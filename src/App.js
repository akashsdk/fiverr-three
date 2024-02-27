import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FloatButton } from 'antd';

import Home from "./Screen/Home";
import Headers from './Components/Header';
import Footer from './Components/Footer';
import Charges from './Screen/Charges';
import ServicesCustomer from './Screen/ServicesCustomer';
import ServicesMerchant from './Screen/ServicesMerchant';
import AboutUs from './Screen/AboutUs';
import Contact from './Screen/Contact';
import Register from './Components/Register';
import TrackOrder from './Components/TrackOrder';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Routes>
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/charges" element={<Charges />} />
          <Route path="/services-customer" element={<ServicesCustomer />} />
          <Route path="/services-merchant" element={<ServicesMerchant />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
        </Routes>
        <Footer/>
        <FloatButton.BackTop visibilityHeight={0} />
      </div>
    </BrowserRouter>
  );
}

export default App;
