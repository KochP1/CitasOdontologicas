import { EditUser } from "../../components"
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch/useFetch"
import './editPage.css'

interface Usuario {
    id: number
    nombre: string
    segundo_nombre: string
    apellido: string
    segundo_apellido: string
    telefono: string
    dirección: string
    historia_medica: string
    vacaciones: string
}

let url = ''

export const EditPage = () => {
    const { id } = useParams();
    const { user } = useParams()

    if (user === 'paciente') {
        url = 'http://127.0.0.1:8000/pacientes/modificar_paciente'
    } else {
        url = `http://127.0.0.1:8000/doctores/modificar_doctor`
    }

    const {data: usuario, error} = useFetch<Usuario>(`${url}/${id}`)

    if (error) {
        return (
            <div>error</div>
        )
    }

    return (
        <>
            <div className="options-menu__container">
                <h1>Editar</h1>
            </div>

            <div className="edit__wrapper">
                <form className="edit-user__form">
                    <div className="imagen-usuario__container">
                        <img src="/images/user.png" alt="user" />
                    </div>
                
                    <div className="edit__conatiner">

                        <EditUser label='Nombre' value={usuario?.nombre || ''}></EditUser>
                        <EditUser label='Segundo nombre' value={usuario?.segundo_nombre || ''}></EditUser>
                        <EditUser label='Apellido' value={usuario?.apellido || ''}></EditUser>
                        <EditUser label='Segundo apellido' value={usuario?.segundo_apellido || ''}></EditUser>
                        <EditUser label='Teléfono' value={usuario?.telefono || ''}></EditUser>
                        <EditUser label='Dirección' value={usuario?.dirección || ''}></EditUser>
                        {usuario?.historia_medica&& (
                            <EditUser label='Historia médica' value={usuario?.historia_medica || ''}></EditUser>
                        )}

                        {usuario?.vacaciones && (
                            <EditUser label='Vacaciones' value={usuario?.vacaciones || ''}></EditUser>
                        )}
                    </div>

                    <button className="btn btn-primary btn-editar">Guardar</button>
                </form>

            </div>
        </>
    )
}