import "./App.css";
import Helloworld from "./components/Helloworld";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Helloworld />
    </>
  );
}

export default App;
