import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, Dashboard } from './pages';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <LoginPage/> } />
        <Route path='/dashboard/*' element={ <Dashboard/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
