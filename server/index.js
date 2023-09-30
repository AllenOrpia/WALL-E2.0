import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import imageRoutes from "./routes/images.js";
import dalleRoutes from './routes/dalle.js';
import userRoutes from './routes/users.js';

import connectDb from "./config/mongoose.config.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));



app.use("/api/images", imageRoutes);
app.use('/api/dalle', dalleRoutes)
app.use('/', userRoutes)

connectDb(process.env.DB_ATLAS_URL)

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
