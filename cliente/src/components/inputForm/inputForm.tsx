import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValues } from "../models";

interface Props {
    name: keyof FormValues
    control: Control<FormValues>
    label: string
    type?: string
    error?: FieldError
}

export const InputForm = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
            {error && (
                <p className="error-notification">{error.message}</p>
            )}
        </div>
    )
}