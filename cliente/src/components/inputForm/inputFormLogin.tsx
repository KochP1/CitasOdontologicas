import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValuesLogin } from "../models";

interface Props {
    name: keyof FormValuesLogin
    control: Control<FormValuesLogin>
    label: string
    type?: string
    error?: FieldError
}

export const InputFormLogin = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
        </div>
    )
}