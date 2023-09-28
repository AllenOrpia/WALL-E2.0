import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const dalleRoutes = express.Router();

dalleRoutes.route("/")
  // .get(async (req, res) => {
  //   res.send("Hi");
  // })
  .post(async (req, res) => {
    const { prompt } = req.body
    const encodedParams = new URLSearchParams();
    encodedParams.set("text", prompt);

    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/texttoimage2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
      data: encodedParams,
    };
    try {
      const response = await axios.request(options);
      const imgSrc = response.data.url;
      console.log(imgSrc);
      res.json({ photo: imgSrc})
    } catch (error) {
      console.error(error);
    }
  });
export default dalleRoutes;
