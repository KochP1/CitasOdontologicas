import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValuesOdontolgo } from "../models";

interface Props {
    name: keyof FormValuesOdontolgo
    control: Control<FormValuesOdontolgo>
    label: string
    type?: string
    error?: FieldError
}

export const InputFormOdontologo = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-form-odontologo__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
        </div>
    )
}