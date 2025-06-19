import './editUserComponent.css'

interface Props {
    label: string
    value: string
}

export const EditUser = ({label, value}: Props) => {
    return (
        <>
            <div className='campos__container'>
                <label htmlFor="">{label}</label>
                <input type="text" value={value}/>
            </div>
        </>
    )
}