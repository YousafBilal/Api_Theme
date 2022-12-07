import React from "react";
import { Route, Routes } from 'react-router-dom'
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import Desktop from "./pages/desktop";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/desktop" element={<Desktop />} />


        </Routes>
    )
}

export default AppRoutes