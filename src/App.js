
import Home from "./components/Home";
import Crew from "./components/Crew";
import Ticket from "./components/Ticket";
import Conference from "./components/Conference";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <Router> 
      <div className=" bg-background">
        <AnimatePresence>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/conference" element={<Conference/>}/>
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/ticket" element={<Ticket/>}/>
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
