import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
