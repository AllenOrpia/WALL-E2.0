import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    prompt: {
        type: String, 
        required: true
    },
    photo: {
        type: String, 
        required: true
    },

})

const Image = mongoose.model('Image', imageSchema);

export default Image;