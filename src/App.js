import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import Headers from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Routes>
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
