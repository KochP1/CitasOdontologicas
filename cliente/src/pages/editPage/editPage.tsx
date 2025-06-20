import { EditUser } from "../../components"
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch/useFetch"
import './editPage.css'
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema_editUser, type FormValuesEdit } from "../../components/models";
import { useEffect, useState } from "react";

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

let url = '';
let title = '';

export const EditPage = () => {
    const { id } = useParams();
    const { user } = useParams()

    if (user === 'paciente') {
        url = `http://127.0.0.1:8000/pacientes/modificar_paciente/${id}`;
        title = 'paciente';
    } else {
        url = `http://127.0.0.1:8000/doctores/modificar_doctor/${id}`;
        title = 'doctor';
    }

    const {data: usuario, error} = useFetch<Usuario>(url)

    if (error) {
        return (
            <div>error</div>
        )
    }

    const { control, handleSubmit, reset, formState: { errors } } = useForm<FormValuesEdit>({
            resolver: zodResolver(schema_editUser),
            mode: 'onBlur',
            defaultValues: {
                    nombre: '',
                    segundoNombre: '',
                    apellido: '',
                    segundoApellido: '',
                    teléfono: '',
                    direccion: '',
                    historia_medica: '',
                    vacaciones: ''
            }
        });

    // Cuando los datos del usuario estén disponibles
    useEffect(() => {
        if (usuario) {
            reset({
                nombre: usuario?.nombre || '',
                segundoNombre: usuario?.segundo_nombre || '',
                apellido: usuario.apellido || '',
                segundoApellido: usuario.segundo_apellido || '',
                teléfono: usuario.telefono || '',
                direccion: usuario.dirección || '',
                historia_medica: usuario.historia_medica || '',
                vacaciones: usuario.vacaciones || ''
            });
        }
    }, [usuario, reset]);

    const [apiError, setApiError] = useState<Error | null>(null);
    
    const onSubmit: SubmitHandler<FormValuesEdit> = async (fields) => {
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
                        method: 'PUT',
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
                    const data = await response.json()
        
                    if (!response.ok) {         
                        throw new Error(`HTTP error! status: ${response.status }`);
                    }

                    window.location.reload();
                    alert(data.mensaje)
                } catch (error) {
                    setApiError(error as Error);
                    alert(apiError)
                    console.log(error)
                }
        };

    return (
        <>
            <div className="options-menu__container">
                <h1>Editar {title}</h1>
            </div>

            <div className="edit__wrapper">
                <form key={usuario?.id} className="edit-user__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="imagen-usuario__container">
                        <img src="/images/user.png" alt="user" />
                    </div>
                
                    <div className="edit__container">
                        <EditUser label='Nombre' name="nombre" control={control} error={errors.nombre} />
                        
                        <EditUser label='Segundo nombre' name="segundoNombre" control={control} error={errors.segundoNombre} />
                        
                        <EditUser label='Apellido' name="apellido" control={control} error={errors.apellido} />
                        
                        <EditUser label='Segundo apellido' name="segundoApellido" control={control} error={errors.segundoApellido} />
                        
                        <EditUser label='Teléfono' name="teléfono" control={control} error={errors.teléfono} />
                        
                        <EditUser label='Dirección' name="direccion" control={control} error={errors.direccion} />

                        {usuario?.historia_medica && (
                            <EditUser label='Historia médica' name="historia_medica" control={control} error={errors.historia_medica} />
                        )}

                        {usuario?.vacaciones && (
                            <EditUser label='Vacaciones' name="vacaciones" control={control} error={errors.vacaciones} />
                        )}
                    </div>
                    <button className="btn btn-primary btn-editar">Guardar</button>
                </form>

            </div>
        </>
    )
}