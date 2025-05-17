import { Link } from "react-router-dom"
import './sidebar.css'

export const SideBar = () => {

    return (
        <aside className="aside-sidebar" style={{display: 'flex'}}>
            <nav className="sidebar">
                <div className="logo__container">
                    <Link to={"/inicio"}>
                        <img src="/images/dienteMuyReal.png" alt="DentalRecords" className="logo"/>
                    </Link>
                </div>
                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-house"></i>
                    </div>
                    
                    <div className="link__container">
                        <Link to={"/inicio"} className="sidebar-link">Inicio</Link>
                    </div>
                </div>

                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div className="link__container">
                        <Link to={""}className="sidebar-link">Odontólogos</Link>
                    </div>
                </div>

                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-hospital-user"></i>
                    </div>

                    <div className="link__container">
                        <Link to={""} className="sidebar-link">Pacientes</Link>
                    </div>
                </div>

                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-calendar-check"></i>
                    </div>

                    <div className="link__container">
                        <Link to={""} className="sidebar-link">Citas</Link>
                    </div>
                </div>

                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-gear"></i>
                    </div>

                    <div className="link__container">
                        <Link to={""} className="sidebar-link">Ajustes</Link>
                    </div>
                </div>

                <div className="sidebar-option__container">
                    <div className="icon-sidebar__container">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </div>

                    <div className="link__container">
                        <Link to={""} className="sidebar-link">Salir</Link>
                    </div>
                </div>
            </nav>
        </aside>
    )
}