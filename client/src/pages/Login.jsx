import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  const [_, setCookies] = useCookies("access_token")

  const handleChange = (e) => {
    setUserForm((currUserForm) => {
      return (currUserForm = { ...userForm, [e.target.name]: e.target.value });
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .post("https://wall-e-lww3.onrender.com/api/login", {
          username: userForm.username,
          password: userForm.password,
        })

        if (!response.data.username) {
          setUserForm( currForm => {
            return currForm = {
              username : '',
              password : ''
          }
          })
          navigate('/login')
          toast.error(response.data.message)
        } else {
          toast.success('Successfully logged in!')
          
          setCookies("access_token", response.data.token);
          window.localStorage.setItem("username", response.data.username)
          navigate("/")
        }
        

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mb-3 self-center">Login</h1>
      <form className="flex flex-col w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            value={userForm.username}
            name="username"
            id="username"
            onChange={handleChange}
            className=" outline outline-slate-200 w-full rounded-full px-3"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userForm.password}
            onChange={handleChange}
            className="outline outline-slate-200 w-full rounded-full px-3"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-red-400 text-white text-md w-1/2 md:w-1/4  rounded-full "
        >
          Login 
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
