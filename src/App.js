import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/header/index";
import Verify from "./components/signup/RegVerification";
import ChangePassword from "./pages/forget/ChangePassword";
import ConfirmForgetPass from "./pages/forget/ConfirmForgetPass";
import Forget from "./pages/forget/Forget";
import Home from "./pages/Home";
import Login from "./pages/login/index";
import Profile from "./pages/profile/index";
import Reg from "./pages/signup/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
                {/* <Routes>
                        <Route exact path="/login">
                            {localStorage.getItem("token") ? (
                                <Navigate to="/" />
                            ) : (
                                element={<Login />},
                            )}
                        </Route>
                    </Routes>
                    <Routes>
                        <Route exact path="/reg">
                            {localStorage.getItem("token") ? (
                                <Navigate to="/" />
                            ) : (
                                <Reg />
                            )}
                        </Route>
                    </Routes> */}
                <Routes>
                    <Route exact path="/verify" element={<Verify />} />
                </Routes>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route exact path="/reg" element={<Reg />} />
                </Routes>
                <Routes>
                    <Route exact path="/forget" element={<Forget />} />
                </Routes>
                <Routes>
                    <Route
                        exact
                        path="/confirmForgetPass"
                        element={<ConfirmForgetPass />}
                    />
                </Routes>
                <Routes>
                    <Route
                        exact
                        path="/changePassword"
                        element={<ChangePassword />}
                    />
                </Routes>
                <Routes>
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
