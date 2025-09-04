import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from './pages/About';
import Clock from './pages/Clock';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About/>}/>
        <Route path ='/clock' element={<Clock/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
