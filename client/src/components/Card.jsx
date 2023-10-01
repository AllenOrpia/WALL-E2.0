import React from "react";
import { download } from "../assets";
import { downLoadImage } from "../utils";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { red } from "@mui/material/colors";
import { Icon, IconButton } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Card = ({ _id, name, photo, prompt, setAllPost, data }) => {
  const color = red[500]
  const username = window.localStorage.getItem("username")
  
  
  
  const deleteImage = (id) => {
    const filteredData = data.filter( (item) => {
      return item != id
    })
    
    setAllPost( currPost => {
      return currPost = [...filteredData] 
    })
    try {
      axios.get(`http://localhost:3000/api/images/${id}`)
      .then( res => {
        
          console.log(res)
         
        })

    } catch(err) {
      console.log(err)
    } finally {
      setAllPost(filteredData)
    }

  }


  
  return (
    <div className="rounded-xl group relative shadow-hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 bg-black m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Stack>
              <Avatar sx={{ bgcolor: color}}>{name[0]}</Avatar>
            </Stack>
            <p className="text-white text-md">{name}</p>
          </div>
          {/* <button
            type="button"
            onClick={() => {
              downLoadImage(_id, photo);
            }}
            className="outline-none bg-transparent border-none bg-red-400 rounded-full"
          >  */}
          <div className="flex gap-2">
            <IconButton   onClick={() => {
                downLoadImage(_id, photo);
              }}>
              {/* <img
                  src={download}
                  alt="download"
                  className="w-6 h-6 object-contain invert"
                /> */}
                <FileDownloadIcon className="text-white"></FileDownloadIcon>
            </IconButton>

            { username == name ? (
              
                <IconButton onClick={ () => deleteImage(_id)}>
                  <DeleteIcon className="text-white" ></DeleteIcon>
                </IconButton> 
              
            )
            :
            '' }
            

          </div>

          

          {/* </button> */}
        </div>
      </div>
    
    </div>
  );
};

export default Card;
