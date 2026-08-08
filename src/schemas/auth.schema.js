import {z} from "zod"

export const registerSchema = z.object({
    username: z.string({required_error: 'Username is required'}),
    name:z.string({required_error: 'Name is required'}),
    lastName, 
    phone,
    password
})