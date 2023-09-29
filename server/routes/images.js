import express from "express";
import { createImage, getAllImages } from "../controllers/images.js";


const imageRoutes = express.Router({ mergeParams: true });

imageRoutes.route("/")
  .get(getAllImages)
  .post(createImage)

export default imageRoutes;
