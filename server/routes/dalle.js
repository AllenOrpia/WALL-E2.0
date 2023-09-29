import express from "express";
import generateImg from "../controllers/dalles.js";

const dalleRoutes = express.Router();

dalleRoutes.route("/")
  // .get(async (req, res) => {
  //   res.send("Hi");
  // })
  .post(generateImg)
export default dalleRoutes;
