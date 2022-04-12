import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div>
    <NavBar />
    <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
    </Routes>
    </div>
  )
}

export default App
