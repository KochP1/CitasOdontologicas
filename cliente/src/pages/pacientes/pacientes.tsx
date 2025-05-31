import './pacientes.css'
import { useFetch } from '../../hooks/useFetch/useFetch';
import { Modal, OpcionesModulos } from '../../components';
import { useState } from 'react';

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
    const [modal, setModal] = useState(false);
        
    const toggleModal = () => {
        setModal(!modal);
    };
        
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const {data, error} = useFetch<Paciente[]>(url);
    return(
        <>
            <OpcionesModulos modulo='Pacientes' OnClick={toggleModal}/>
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {data !== null && !error && data.map((pacientes) => (
                                <tr key={pacientes.id}>
                                    <td>{pacientes.id}</td>
                                    <td>{pacientes.nombre}</td>
                                    <td>{pacientes.segundo_nombre}</td>
                                    <td>{pacientes.apellido}</td>
                                    <td>{pacientes.segundo_apellido}</td>
                                    <td>{pacientes.telefono}</td>
                                    <td>{pacientes.dirección}</td>
                                    <td>{pacientes.historia_medica}</td>
                                    <td><button className='btn btn-primary'>Editar</button></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal modulo='Pacientes' toggle={toggleModal} modal={modal}>
                <form>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </Modal>
        </>
    )
}