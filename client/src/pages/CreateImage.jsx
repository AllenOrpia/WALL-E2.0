import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import Form from "../components/Form";
import Loader from "../components/Loader";
import axios from 'axios';


const username = window.localStorage.getItem("username")
const CreateImage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: username,
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response =  await axios.post('http://localhost:3000/api/images', {
          name: form.name,
          photo : form.photo,
          prompt : form.prompt
        })
        console.log(response.data)
        navigate('/')
      } catch (err) {
          console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter prompt and generate image')
    }
  };

  const handleChange = (e) => {
    setForm( currForm => {
      return {
        ...currForm, [e.target.name] :e.target.value,
      }
    })
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm( currForm => {
        return {
          ...currForm, prompt: randomPrompt
        }
    })
  };
  const generateImg = async (e) => {
    e.preventDefault();
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        await axios.post('http://localhost:3000/api/dalle', {
          prompt: form.prompt,
        })
        .then( res => {
          setForm({...form, photo: res.data.photo})
          console.log(res.data)
        })
        .catch( err => {
          console.log(err)
        })

      }
      catch (error) {
        console.log(error)
      } finally {
        setGeneratingImg(false);
       
      }
    } else {
      alert('please enter a prompt')
    }
  };

  return (
    <section className="max-w-7xl mx-aut">
      <div className="mx-auto w-3/4">
        <h1 className=" font-bold text-3xl">Create</h1>
        <p className="mt-3  max-w[500px text-lg">
          With the help of DALL-E create cool and imaginative AI images!
        </p>
      </div>
      <form  className="mt-10 w-3/4 mx-auto" onSubmit={handleSubmit}>
        <div>
       
       
          <Form
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder={'A cat'}
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          
          <div
            className="mt-5 relative bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
             p-3  justify-center items-center "
          >
            {form.photo ? 
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              >
              </img>
             : 
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              ></img>
            }
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="text-white bg-red-400 font-medium rounded-full text-md w-full sm:w-auto px-3 py-2 hover:translate-x-2 hover:-translate-y-1 "
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-5 ">
              <p className="mb-3">Do you want to share your creation to the community? If so press the button below!</p>
              <button className="text-white bg-red-400 px-3 py-2 w-full sm:w-auto hover:translate-x-2 hover:-translate-y-1 rounded-full" type="submit">
                { loading ? 'sharing...' : 'Share image'}
              </button>
        </div>
      </form>
    </section>
  );
};

export default CreateImage;
