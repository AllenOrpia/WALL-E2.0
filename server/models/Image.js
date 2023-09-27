import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'name is required']
    },
    prompt: {
        type: String, 
        required: [true, 'prompt is required']
    },
    photo: {
        type: String, 
        required: [true, 'photo is required']
    },
})

const Image = mongoose.model('Image', imageSchema);

export default Image;