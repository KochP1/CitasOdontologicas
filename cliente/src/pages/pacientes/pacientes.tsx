import './pacientes.css'
import { useFetch } from '../../hooks/useFetch/useFetch';

const url = 'http://127.0.0.1:8000/pacientes/crear_paciente/'



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

export const PacientesPage = () => {
    const {data, error} = useFetch<Paciente[]>(url);
    return(
        <>
            <div className='table__wrapper'>
                <div className='table-responsive'>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Segundo nombre</th>
                                <th>Apellido</th>
                                <th>Segundo apellido</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Historia médica</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data !== null && !error && data.map((pacientes) => (
                                <tr>
                                    <td>{pacientes.id}</td>
                                    <td>{pacientes.nombre}</td>
                                    <td>{pacientes.segundo_nombre}</td>
                                    <td>{pacientes.apellido}</td>
                                    <td>{pacientes.segundo_apellido}</td>
                                    <td>{pacientes.telefono}</td>
                                    <td>{pacientes.dirección}</td>
                                    <td>{pacientes.historia_medica}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}