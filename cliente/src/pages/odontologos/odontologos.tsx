import './odontologos.css'
import { useFetch } from '../../hooks/useFetch/useFetch';
import { OpcionesModulos, InputFormOdontologo } from '../../components';
import { Modal } from '../../components';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { schema_odontologo, type FormValuesOdontolgo } from '../../components/models';

const url = 'http://127.0.0.1:8000/doctores/crear_doctor/'


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

export const OdontologsPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesOdontolgo>({
        resolver: zodResolver(schema_odontologo),
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

    const onSubmit: SubmitHandler<FormValuesOdontolgo> = async (fields) => {
            setApiError(null);
            const nombre = fields.nombre
            const segundo_nombre = fields.segundoNombre
            const apellido = fields.apellido
            const segundo_apellido = fields.segundoApellido
            const especialidad = fields.especialidad
            const telefono = fields.teléfono
            const direccion = fields.direccion
            
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
                        "especialidad": especialidad,
                        "telefono": telefono,
                        "dirección": direccion,
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
                                <th>Especialidad</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Vacaciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data !== null && !error && data.map((doctores) => (
                                <tr key={doctores.id}>
                                    <td>{doctores.id}</td>
                                    <td>{doctores.nombre}</td>
                                    <td>{doctores.apellido}</td>
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
                <form onSubmit={handleSubmit(onSubmit)} className='from-crear-odontologo'>
                    <InputFormOdontologo name='nombre' control={control} label='Nombre' type='text' error={errors.nombre} />
                    <InputFormOdontologo name='segundoNombre' control={control} label='Segundo nombre' type='text' error={errors.segundoNombre} />
                    <InputFormOdontologo name='apellido' control={control} label='Apellido' type='text' error={errors.apellido} />
                    <InputFormOdontologo name='segundoApellido' control={control} label='Segundo apellido' type='text' error={errors.segundoApellido} />
                    <InputFormOdontologo name='especialidad' control={control} label='Especialidad' type='text' error={errors.especialidad} />
                    <InputFormOdontologo name='teléfono' control={control} label='Teléfono' type='text' error={errors.teléfono} />
                    <InputFormOdontologo name='direccion' control={control} label='dirección' type='text' error={errors.direccion} />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </Modal>
        </>
    )
}