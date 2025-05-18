import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar, Header } from '../../components';
import { Inicio } from '../inicio/inicio';

export const Dashboard = () => {
      return (
        <>
          <div className='wrapper'>
            <SideBar/>
            <div className='content'>
              <Header/>
              <Routes>
                <Route path='/' element={ <Inicio/> } />
              </Routes>
            </div>
          </div>
        </>
      )
}