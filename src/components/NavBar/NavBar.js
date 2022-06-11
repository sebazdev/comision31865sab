import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
        <Link to='/'>
          <h3>Ecommerce</h3>
        </Link>
        <div className="Categories">
          <NavLink to='/category/celular' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
          <NavLink to='/category/tablet' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
          <NavLink to='/category/notebook' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar