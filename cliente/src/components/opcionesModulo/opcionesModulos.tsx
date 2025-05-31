import './opcionesModulos.css'

interface Params {
    modulo: string
}

export const OpcionesModulos = ({modulo}: Params) => {
    return (
        <div className='options-menu__container'>
            <h1>{modulo}</h1>
            <div className='btn-options__container'>
                <button className='btn-options'>Crear {modulo}</button>
                <button className='btn-options'>Generar reporte</button>
                <button className='btn-options'>Migrar a excel</button>
            </div>
            <hr />
        </div>
    )
}