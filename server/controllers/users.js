import User from "../models/User.js";
import bcrypt from 'bcrypt';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
// dotenv.config()


export const login = async (req, res) => {
    const { username, password } = req.body;

    if (username == '' || password == '') {
        return res.json( {message : 'Username and Password cant be blank'})
    }

    const user = await User.findOne({ username: username});

    if (!user) {
        return res.json({message: 'User does not exist!'})
    } 

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json ({ message: 'Username or Password is incorrect'})
    }

    const token = jwt.sign({ id: user._id}, process.env.TOKEN_SECRET)

    res.json({username: user.username, token,  success: 'Succesfully Logged in!'})
     

}


export const register = async (req,res) => {
    const { username, password } = req.body;

    if (username == '' || password == '') {
        return res.json( {message : 'Username and Password cant be blank'})
    }
    
    const user = await User.findOne({ username: username });
    

    if (user) {
        return res.json({ message: 'User already exists!'})
    } 
        
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({  username, password: hashedPassword})
    await newUser.save()

    res.json({ success: 'Successfully registered!'})
    
}

