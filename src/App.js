
import Home from "./components/Home";
import Crew from "./components/Crew";
import Ticket from "./components/Ticket";
import Conference from "./components/Conference";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {AnimatePresence} from 'framer-motion'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router> 
      <ScrollToTop/>
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
