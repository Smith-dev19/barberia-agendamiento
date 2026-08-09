import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({message: 'Username is required'}),
    name:z.string({message: 'Name is required'}),
    lastName:z.string({message: 'Last name is required'}), 
    password: z.string({message: 'Password is required'}).min(8,{message: 'Password must be at least 8 characters'})
})

export const loginSchema = z.object({
    username: z.string({message: 'Username is required '}),
    password: z.string({message: 'Password is required'}).min(8, {message: 'Password must be least 8 characters'})
})