import "./sidebar.css"
import { MdWysiwyg, MdOutlineFormatListBulleted, MdWebStories, MdViewComfy } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import { AiOutlineDashboard } from "react-icons/ai"


export default function Sidebar() {

  return (
    <section className='sidebar'>
      <header className='sidebar__header'>
        <span className='sidebar__headerLogo'>
          {/* <img src='https://i.ibb.co/BCqmJcN/Screenshot-1-removebg-preview-1.png' alt='logo' loading='lazy'></img> */}
          <h2>Señor de la Misericordia</h2>
        </span>
      </header>
      <div className='sidebar__center'>
        <div className='sidebar__usuario'>
          <div>
            <img 
              className='item--avatar'
              src='https://i.ibb.co/7yBdxZ6/Whats-App-Image-2022-07-29-at-1-54-25-AM.jpg'
              alt='avatar'
              loading='lazy'
            />   
          </div>
          <div className='usuario__container'>
            <h3>Usuario 1</h3>
            <p>Rol</p>
          </div>
        </div>
        <ul>
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <li>
              <AiOutlineDashboard />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <li>
              <MdOutlineFormatListBulleted />
              <span>Trabajadores</span>
            </li>
          </NavLink>
          <NavLink
            to="/" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                    
          >
            <li>
              <MdWysiwyg />
              <span>Camiones</span>
            </li>
          </NavLink>
          <NavLink
            to="/" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                             
          >
            <li>
              <MdWebStories />
              <span>Cotizaciones</span>
            </li>
          </NavLink>
          <NavLink
            to="/" 
            className={({ isActive }) => (isActive ? "link-active" : "")}                         
          >
            <li>
              <MdViewComfy />
              <span>Facturas</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </section>
  )
}
