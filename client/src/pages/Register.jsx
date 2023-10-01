import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();
    const [userForm, setUserForm] = useState({
        username: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setUserForm((currUserForm) => {
          return (currUserForm = { ...userForm, [e.target.name]: e.target.value });
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios
            .post("https://wall-e-lww3.onrender.com/api/register", {
              username: userForm.username,
              password: userForm.password,
            })

          if (response.data.message) {
            setUserForm( currForm => {
              return currForm = {
                username: '',
                password: ''
              }
            })
            toast.error(response.data.message)
            
          } else {
            navigate('/login')
            toast.success(response.data.success)
          }



          
        } catch (err) {
          console.log(err);
        }
      };
      return (
        <div className="flex flex-col w-3/4 mx-auto">
          <h1 className="text-3xl font-bold mb-3 self-center">Register</h1>
          <form className="flex flex-col w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="username" >
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
              <label htmlFor="password">Password</label>
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
              className="p-2 bg-red-400 text-white text-md w-1/2 md:w-1/4 rounded-full "
            >
              Register
            </button>
          </form>
          <ToastContainer />
        </div>
      );
}

export default Register