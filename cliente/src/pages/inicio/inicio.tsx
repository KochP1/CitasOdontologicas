import './inicio.css'

export const Inicio = () => {
    return (
        <div className="inicio__wrapper">
            <div className="stats-grid__container">
                
                <div className="stat__container">

                    <div className='icon__container'>
                        <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div className='cantidad__container'>
                        <p>4</p>
                        <p>Odontólogos</p>
                    </div>
                </div>

                <div className="stat__container">

                    <div className='icon__container'>
                        <i className="fa-solid fa-hospital-user"></i>
                    </div>
                    <div className='cantidad__container'>
                        <p>4</p>
                        <p>Pacientes</p>
                    </div>
                </div>

                <div className="stat__container">

                    <div className='icon__container'>
                        <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div className='cantidad__container'>
                        <p>4</p>
                        <p>Citas activas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}