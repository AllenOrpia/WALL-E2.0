import express from "express";
import { createImage, getAllImages, deleteImage } from "../controllers/images.js";


const imageRoutes = express.Router({ mergeParams: true });

imageRoutes.route("/")
  .get(getAllImages)
  .post(createImage)

  imageRoutes.route('/:id')
  .get(deleteImage)
  
export default imageRoutes;
