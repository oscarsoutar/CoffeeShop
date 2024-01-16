import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Layout from './components/layout';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from "./pages/News"
import About from './pages/About';

export default function App() {
  return (
    <Router>
    <Routes>
        <Navbar />
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/" element={<News />} /> 
          <Route path="/" element={<About />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}