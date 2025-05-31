import './opcionesModulos.css'

interface Params {
    modulo: string
    OnClick: () => void
}

export const OpcionesModulos = ({modulo, OnClick}: Params) => {
    return (
        
        <div className='options-menu__container'>
            <h1>{modulo}</h1>
            <div className='btn-options__container'>
                <button className='btn-options' onClick={OnClick}>Crear {modulo}</button>
                <button className='btn-options'>Generar reporte</button>
                <button className='btn-options'>Migrar a excel</button>
            </div>
            <hr />
        </div>
    )
}