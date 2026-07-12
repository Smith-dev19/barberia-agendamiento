import User from "../models/user.model.js"


export const register = async (req,res) =>{
    const {username,
        name,
        lastName, 
        phone,
        password} = req.body
    console.log(req.body)

    try {
        const newUser = new User ({
        username,
        name,
        lastName, 
        phone,
        password  
    })
    const userSaved = await newUser.save()
    res.json(userSaved)
    
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req,res) =>{
    res.send('Estoy logueado')
}