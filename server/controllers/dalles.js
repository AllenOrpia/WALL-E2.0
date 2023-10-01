
import axios from 'axios';
import * as dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

dotenv.config();

const generateImg = async (req,res) => {
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
      // const photoUrl = await cloudinary.uploader.upload(imgSrc);
      res.json({ photo: imgSrc})
    } catch (error) {
      console.error(error);
    }
}

export default generateImg