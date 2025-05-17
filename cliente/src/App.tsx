import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar, Header } from './components';
import { Inicio, LoginPage } from './pages';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <div className='wrapper'>
        <SideBar/>
        <div className='content'>
          <Header/>
          <Routes>
            <Route path='/' element={ <LoginPage/> } />
            <Route path='/inicio' element={ <Inicio/> } />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
