import './App.css';
import Home from "./components/pages/Home";
import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewInvoice from "./components/pages/NewInvoice";
import BankAccount from "./components/pages/BankAccount";
import Registers from "./components/pages/Registers";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {

    const [isLogin, setLogin] = useState(true);
    return (
        isLogin ? <Login setLogin={setLogin} /> :
        <Router>
            <div className="App">
                <NavBar setLogin={setLogin} />
                <div className="section">
                    <Routes>
                        <Route path="/"  element={<Home />}> </Route>
                        <Route path="/home"  element={<Home />}> </Route>
                        <Route path="/new-invoice" element={ <NewInvoice/> }> </Route>
                        <Route path="/bank-account" element={ <BankAccount/> }> </Route>
                        <Route path="/registers" element={ <Registers/> }> </Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
