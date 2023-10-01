


import Image from "../models/Image.js";
import * as dotenv from "dotenv";

dotenv.config();



export const getAllImages = async (req, res) => {
    
    try {
        const images = await Image.find({});
        res.json({ data: images})
        
    } catch (err) {
        console.log(err)
    }
}

export const createImage = async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;

        const newImage = await Image.create({
          name: name,
          prompt: prompt,
          photo: photo,
        });
        
        console.log(newImage)
        res.json({ data: newImage });
        
      } catch (err) {
          console.log(err, 'invalid')
      }
}

export const deleteImage = async (req,res) => {
  try {
    const { id } = req.params;
    console.log(id)
    await Image.findByIdAndDelete(id)
  
    res.json({message: "Successfully Deleted"})

  } catch (err) {
    console.log(err)
  }
}

