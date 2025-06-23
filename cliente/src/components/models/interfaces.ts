export interface Paciente {
    id: number
    nombre: string;
    segundo_nombre: string;
    apellido: string;
    segundo_apellido: string
    telefono: number
    dirección: string
    historia_medica: string | null
}

export interface Profesional {
    id: number
    nombre: string;
    segundo_nombre: string;
    apellido: string;
    segundo_apellido: string
    especialidad: string;
    telefono: string;
    dirección: string;
    vacaciones: boolean;
}

export interface Cita {
    id: number
    doctor: Profesional
    paciente: Paciente
    fecha: string
    hora: string
    es_activa: boolean
}