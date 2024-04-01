import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <NavLink style={{textDecoration:"none", color:"white"}} to ="/"  ><h1>Home</h1></NavLink> 
        <NavLink style={{textDecoration:"none", color:"white"}} to="/contacts"><h1 className='contacts'>Contacts</h1></NavLink>
        <NavLink style={{textDecoration:"none", color:"white"}} to="/register"><h1>Register</h1></NavLink>
      </nav>
    </>

  )
}

export default Navbar
