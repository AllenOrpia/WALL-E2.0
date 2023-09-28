import express from "express";

import { v2 as cloudinary } from "cloudinary";
import Image from "../models/Image.js";
import * as dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const imageRoutes = express.Router({ mergeParams: true });

imageRoutes.route("/")
  .get(async (req, res) => {
    try {
        const images = await Image.find({});
        res.json({ data: images})
        
    } catch (err) {
        console.log(err)
    }
  })
  .post(async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo);

      const newImage = await Image.create({
        name: name,
        prompt: prompt,
        photo: photoUrl.url,
      });

      res.json({ data: newImage });
      
    } catch (err) {
        console.log(err)
    }
  });

export default imageRoutes;
