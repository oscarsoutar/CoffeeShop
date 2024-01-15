import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;




// import { BrowserRouter, Route, Routes } from "react-router-dom"
// export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={Layout}>
//           <Route path="/" element={Home} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
