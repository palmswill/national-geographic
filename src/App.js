import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainshow from "./components/MainShow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Mainshow/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
