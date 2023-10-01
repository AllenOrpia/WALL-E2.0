import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateImage from "./pages/CreateImage";
import { logo } from "./assets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useCookies } from "react-cookie";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LoginIcon from "@mui/icons-material/Login";


const App = () => {
 
  const [cookies, setCookies] = useCookies(["access_token"]);
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("username")
    toast.success('Logged out successfully!')
  }
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b shadow-xl text-black sticky top-0 z-50">
          <Link to={"/"}>
            <img src={logo} alt="" className="hidden md:inline-block" />
            <p className=" font-extrabold text-2xl text-red-400">WALL-E</p>
          </Link>
          <div className="flex justify-between gap-4 items-center">
            {!cookies.access_token ? (
              <div className="flex gap-2">
                <Link to={"/login"}>
                  <span className="text-slate-500 text-md font-bold">
                    Login
                  </span>
                  <LoginIcon className="text-red-400"></LoginIcon>
                </Link>
                <Link to={"/register"}>
                  <span className="text-slate-500 text-md font-bold">
                    Register
                  </span>
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to={"/create-image"}>
                  <span className="text-slate-500 font-bold text-md">
                    Create
                  </span>{" "}
                  <AddCircleOutlineIcon className="text-red-400 "></AddCircleOutlineIcon>
                </Link>
                <button onClick={logout}>Log Out</button>
              </div>
            )}
          </div>
        </header>

        <main className="sm:p-8 px-4 py-8 bg-slate-100 w-full min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/create-image" element={<CreateImage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </main>
      <ToastContainer />
      </BrowserRouter>
      
      
    </>
  );
};

export default App;
