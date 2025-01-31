import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasklist from "./Component/Tasks/Tasklist";
import Customer from "./Component/Customer/Customer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/task" element={<Tasklist />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
