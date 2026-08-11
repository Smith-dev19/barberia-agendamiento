import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({ message: 'El Usuario es requerido' }),
  name: z.string({ message: 'El nombre es requerido' }),
  lastName: z.string({ message: 'El apellido es requerido' }),
  password: z
    .string({ message: 'La contraseña es requerida' })
    .min(8, { message: 'La contraseña debe tener minimo 8 caracteres' }),
});

export const loginSchema = z.object({
  username: z.string({ message: 'El Usuario es Invalido' }),
  password: z
    .string({ message: 'La contraseña es requerid' })
    .min(8, { message: 'La contraseña debe tener minimo 8 caracteres' }),
});
