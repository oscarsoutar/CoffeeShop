import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from './components/layout';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import News from './pages/News';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} /> 
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}