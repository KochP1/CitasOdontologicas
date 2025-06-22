import { Link, useNavigate } from "react-router-dom"
import { OpcionesModulos } from "../../components"
import { useFetch } from "../../hooks/useFetch/useFetch";
import './citas.css'

const url = 'http://127.0.0.1:8000/citas/crear_citas/';

interface Profesional {
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

interface Paciente {
    id: number
    nombre: string;
    segundo_nombre: string;
    apellido: string;
    segundo_apellido: string
    telefono: number
    dirección: string
    historia_medica: string | null
}

interface Cita {
    id: number
    doctor: Profesional
    paciente: Paciente
    fecha: string
    hora: string
    es_activa: boolean
}
export const CitasPage = () => {
    const navigate = useNavigate();

    const { data, error } = useFetch<Cita[]>(url)
    return (
        <>
            <OpcionesModulos modulo="Citas" OnClick={() => {navigate('/dashboard/crear_cita')}}></OpcionesModulos>
            <div className='table__wrapper'>
                <div className='table-responsive'>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Odontólogo</th>
                                <th>Paciente</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data !== null && !error && data.map((cita) => (
                                <tr key={cita.id}>
                                    <td>{cita.id}</td>
                                    <td>{cita.doctor.nombre} {cita.doctor.apellido}</td>
                                    <td>{cita.paciente.nombre} {cita.paciente.apellido}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>
                                        <Link to={`/dashboard/editar_cita/${cita.id}/`}>
                                            <button className='btn btn-primary'>Editar</button>
                                        </Link>
                                    </td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}