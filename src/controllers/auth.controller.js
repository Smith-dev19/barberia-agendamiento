import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import { createAccesToken } from "../libs/jwt.js";
import {HASH_SALT} from "../config.js"

export const register = async (req,res) =>{
    const {
        username,
        name,
        lastName, 
        phone,
        password
    } = req.body
    
    console.log(req.body)
    
    const passwordHashed = await bcrypt.hash(password,HASH_SALT)

    try {
        const newUser = new User ({
        username,
        name,
        lastName, 
        phone,
        password: passwordHashed  
    })
    const userSaved = await newUser.save()
    const token = await createAccesToken({id: userSaved._id})
    res.cookie( 'token', token)
    res.json({
        id:userSaved._id,
        username: userSaved.username,
        name: userSaved.name,
        lastName: userSaved.lastName,
        phone: userSaved.phone
    })
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const login = async (req,res) =>{
    Constant
        username, 
        password
    } = req.body
    
    console.log(req.body)

    try {
        
        const userFound = await User.findOne({username})
        if(!userFound) return res.status(400).json({message: "User not foud"})
        
        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json("Incorrect Credential")
        
        const token = await createAccesToken({id: userFound._id})
        res.cookie( 'token', token)
        res.json({
            id:userFound._id,
            username: userFound.username,
            name: userFound.name,
            lastName: userFound.lastName,
            phone: userFound.phone
        })
    
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const logout = (req,res) =>{
    res.cookie("token", "",{
        expires: new Date(0)
    })
    return res.sendStatus(200)
}