import { zodResolver } from "@hookform/resolvers/zod"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { InputFormLogin } from "../../components";
import { type FormValuesLogin, schema_login } from "../../components/models";
import './login.css'

export const LoginPage = () => {
    const header = document.getElementsByTagName('header');
    const sidebar = document.getElementsByClassName('.aside-sidebar')

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesLogin>({
        resolver: zodResolver(schema_login),
        mode: 'onBlur'
    });

     // Estado para manejar la respuesta
    const [apiError, setApiError] = useState<Error | null>(null);
    const onSubmit: SubmitHandler<FormValuesLogin> = async (fields) => {
        setApiError(null);
        const username = fields.username
        const password = fields.password
        
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            };

            const response = await fetch('http://127.0.0.1:8000/users/login/', options);

            const data = await response.json();

            if (!response.ok) {         
                throw new Error(`HTTP error! status: ${response.status }`);
            }

            localStorage.setItem('userData', JSON.stringify({
                isAuthenticated: true,
                csrfToken: data.csrf_token,
                user: data.user
            }));

            navigate('/')
        } catch (error) {
            setApiError(error as Error);
            console.log(error)
        }
    };

    return (
        <div className="login-form__wrapper">
            <form className="login-form">
                <InputFormLogin name="username" control={control} label="Username" type="text" error={errors.username}></InputFormLogin>
                <InputFormLogin name="password" control={control} label="Contraseña" type="password" error={errors.password}></InputFormLogin>

                <div className="login-form-btns__container">
                    <Link to={''} className="login-form-link">¿No estás registrado?</Link>
                    <Link to={''} className="login-form-link">¿Olvidaste tu contraseña?</Link>
                    <button className="btn-login">Inciar sesión</button>
                </div>
            </form>
        </div>
    )
}