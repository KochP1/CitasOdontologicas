import './pacientes.css'
import { useFetch } from '../../hooks/useFetch/useFetch';
import { InputFormPaciente, Modal, OpcionesModulos } from '../../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { schema_paciente, type FormValuesPacientes } from '../../components/models';

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

    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesPacientes>({
        resolver: zodResolver(schema_paciente),
        mode: 'onBlur'
    });

    const [apiError, setApiError] = useState<Error | null>(null);
    const [succes, setSucces] = useState(false)

    const toggleSucces = () => {
        setSucces(true);
    }

    const clear = () => {
        const input = document.querySelectorAll('.form-control');

        if (input) {
            input.forEach((element) => {
                element.textContent = ''
            })
        }

    }
    const onSubmit: SubmitHandler<FormValuesPacientes> = async (fields) => {
            setApiError(null);
            const nombre = fields.nombre
            const segundo_nombre = fields.segundoNombre
            const apellido = fields.apellido
            const segundo_apellido = fields.segundoApellido
            const telefono = fields.teléfono
            const direccion = fields.direccion
            const historia_medica = fields.historia_medica
            
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "nombre": nombre,
                        "segundo_nombre": segundo_nombre,
                        "apellido": apellido,
                        "segundo_apellido": segundo_apellido,
                        "telefono": telefono,
                        "dirección": direccion,
                        "historia_medica": historia_medica,
                    })
                };
    
                const response = await fetch(url, options);

                clear()
                toggleModal()
                toggleSucces()
    
                if (!response.ok) {         
                    throw new Error(`HTTP error! status: ${response.status }`);
                }
            } catch (error) {
                setApiError(error as Error);
                console.log(error)
            }
    };
    
    
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
            {apiError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    </button>
                </div>
            )}

            {succes && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Paciente creado</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    </button>
                </div>
            )}
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
                <form className='from-crear-paciente' onSubmit={handleSubmit(onSubmit)}>
                    <InputFormPaciente name='nombre' control={control} label='Nombre' type='text' error={errors.nombre} />
                    <InputFormPaciente name='segundoNombre' control={control} label='Segundo nombre' type='text' error={errors.segundoNombre} />
                    <InputFormPaciente name='apellido' control={control} label='Apellido' type='text' error={errors.apellido} />
                    <InputFormPaciente name='segundoApellido' control={control} label='Segundo apellido' type='text' error={errors.segundoApellido} />
                    <InputFormPaciente name='teléfono' control={control} label='Teléfono' type='text' error={errors.teléfono} />
                    <InputFormPaciente name='direccion' control={control} label='dirección' type='text' error={errors.direccion} />
                    <InputFormPaciente name='historia_medica' control={control} label='HIstoria médica' type='text' error={errors.historia_medica} />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </Modal>
        </>
    )
}