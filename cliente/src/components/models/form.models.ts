import {z} from "zod"

export const schema = z.object({
    name: z.string().min(1, 'El nombre es requerido').max(20, 'El nombre puede tener 20 caracteres max'),
    lastName: z.string().min(1, 'El apellido es requerido').max(25, 'El apellido puede tener 25 caracteres max'),
    email: z.string().email('Email invalido').min(1, 'El email es requerido').max(55, 'El email puede tener 25 caracteres max'),
    username: z.string().min(1, 'El username es requerido').max(12, 'El username puede tener 12 caracteres max'),
    password: z.string().min(6, 'La contraseña debe tener por lo menos 6 caracteres').max(12, 'la contraseña puede tener 12 caracteres max'),
});


export type FormValues = z.infer<typeof schema>;

export const schema_login = z.object({
    username: z.string().min(1, 'Nombre de usuario requerido'),
    password: z.string().min(1, 'Contraseña requerida'),
});

export type FormValuesLogin = z.infer<typeof schema_login>;

export const schema_paciente = z.object({
    nombre: z.string().max(20, 'El nombre puede tener 20 caracteres max'),
    segundoNombre: z.string().max(20, 'El segundo nombre puede tener 20 caracteres max'),
    apellido: z.string().max(25, 'El apellido puede tener 25 caracteres max'),
    segundoApellido: z.string().max(25, 'El segundo apellido puede tener 25 caracteres max'),
    teléfono: z.string().max(15, 'El teléfono puede tenr 15 caracteres max'),
    direccion: z.string().max(40, 'La dirección puede tener 40 caracteres max'),
    historia_medica: z.string()
})

export type FormValuesPacientes = z.infer<typeof schema_paciente>