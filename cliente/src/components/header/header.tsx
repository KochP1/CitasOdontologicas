import './header.css'

export const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='H1__container'>
                    <h1>Hola, <br /> <span className='nombre-usuario'>Juan Koch</span></h1>
                </div>

                <div className='opciones-navbar__container'>
                    <div className='user-icon'>J</div>
                </div>
            </nav>
        </header>
    )
}