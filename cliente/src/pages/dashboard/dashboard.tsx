import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar, Header } from '../../components';
import { Inicio } from '../inicio/inicio';
import { OdontologsPage } from '../odontologos/odontologos';
import { PacientesPage } from '../pacientes/pacientes';
import { EditPage } from '../editPage/editPage';
import { CitasPage } from '../citas/citas';
import { CrearCitaPage } from '../citas/crearCita';

export const Dashboard = () => {
      return (
        <>
          <div className='wrapper'>
            <SideBar/>
            <div className='content'>
              <Header/>
              <Routes>
                <Route path='/' element={ <Inicio/> } />
                <Route path='/odontologos' element={<OdontologsPage></OdontologsPage>}/>
                <Route path='/pacientes' element={<PacientesPage></PacientesPage>}/>
                <Route path='/citas' element={<CitasPage></CitasPage>}/>
                <Route path='/crear_cita' element={<CrearCitaPage></CrearCitaPage>}/>
                <Route path='/editar/:id/:user' element={<EditPage></EditPage>}/>
              </Routes>
            </div>
          </div>
        </>
      )
}