
import express from 'express';
const dalleRoutes = express.Router();



dalleRoutes.route('/')
    .get( async (req,res) => {
        res.send('Hi')
    })
export default dalleRoutes