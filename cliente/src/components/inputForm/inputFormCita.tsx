import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValuesCita } from "../models";
import type { ReactNode } from "react";

interface Props {
    name: keyof FormValuesCita
    control: Control<FormValuesCita>
    label: string
    type?: string
    error?: FieldError
    children?: ReactNode
}

export const SelectFormCita = ({name, control, label, error, children}: Props) => {
    return (
        <div className="crear-cita__form-control">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) =>
                <select id={name} {...field} className={`${error ? "is-invalid": ""}`}>
                    { children }
                </select>}/>
        </div>
    )
}

export const InputFormCita = ({name, control, label, type, error}: Props) => {
    return (
        <div className="crear-cita__form-control">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={`cita-${name}`} type={type} {...field} className={`${error ? "is-invalid": ""}`}></input>}/>
        </div>
    )
}