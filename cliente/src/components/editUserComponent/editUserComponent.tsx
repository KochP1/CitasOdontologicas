import './editUserComponent.css'
import { Controller, type Control, type FieldError } from "react-hook-form";
import { type FormValuesEdit } from "../models";

interface Props {
    name: keyof FormValuesEdit
    control: Control<FormValuesEdit>
    label: string
    type?: string
    error?: FieldError
}

export const EditUser = ({name, control, label, type, error}: Props) => {
    return (
        <>
            <div className='campos__container'>
                <label htmlFor="">{label}</label>
                <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`${error ? "is-invalid": ""}`}></input>}/>
            </div>
        </>
    )
}