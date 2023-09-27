import express from "express";

import { v2 as cloudinary } from 'cloudinary'
import Image from "../models/Image.js";

const imageRoutes = express.Router({mergeParams: true});

imageRoutes.route('/')
    .get(async (req, res) => {
        res.send('Hello from WALL-E')
    })


export default imageRoutes