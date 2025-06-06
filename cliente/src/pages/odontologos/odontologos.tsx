import './odontologos.css'
import { useFetch } from '../../hooks/useFetch/useFetch';
import { OpcionesModulos } from '../../components';
import { Modal } from '../../components';
import { useState } from 'react';

const url = 'http://127.0.0.1:8000/doctores/crear_doctor/'

interface Usuario {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
}

interface Profesional {
    usuario: Usuario;
    especialidad: string;
    telefono: string;
    dirección: string;
    vacaciones: boolean;
}

export const OdontologsPage = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    };
    
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const {data, error} = useFetch<Profesional[]>(url);
    return(
        <>
            <OpcionesModulos modulo='Odontólogos' OnClick={toggleModal}/>
            <div className='table__wrapper'>
                <div className='table-responsive'>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Especialidad</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Vacaciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data !== null && !error && data.map((doctores) => (
                                <tr key={doctores.usuario.id}>
                                    <td>{doctores.usuario.id}</td>
                                    <td>{doctores.usuario.first_name}</td>
                                    <td>{doctores.usuario.last_name}</td>
                                    <td>{doctores.usuario.email}</td>
                                    <td>{doctores.especialidad}</td>
                                    <td>{doctores.telefono}</td>
                                    <td>{doctores.dirección}</td>
                                    <td>{doctores.vacaciones}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal modulo='Odontólogo' toggle={toggleModal} modal={modal}>
                <form>
                    
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </Modal>
        </>
    )
}