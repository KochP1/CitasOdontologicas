import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar, Header } from '../../components';
import { Inicio } from '../inicio/inicio';
import { OdontologsPage } from '../odontologos/odontologos';
import { PacientesPage } from '../pacientes/pacientes';

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
              </Routes>
            </div>
          </div>
        </>
      )
}