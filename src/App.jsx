import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Form from'./components/form'
import Contacts from './components/contacts'
 
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/register' element={<Form/>}/>
      
    </Routes>
    </>
  )
}

export default App
