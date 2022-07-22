import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/home" element={<Home token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
