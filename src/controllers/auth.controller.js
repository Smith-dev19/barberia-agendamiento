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
    res.send('Estoy logueado')
}