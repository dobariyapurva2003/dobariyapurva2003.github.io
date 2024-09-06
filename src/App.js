import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = (() => {
    
    return (
        <>
        <Router basename="/portfolio">
        <Routes>
          <Route exact path = "/" element={<Home />} />
        </Routes>
        </Router>
        </>
    )
}
)
export default App;