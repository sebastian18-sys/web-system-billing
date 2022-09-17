import { useRef } from "react";
import "./navbar.css"
import {MdMenu, MdNotificationsNone, MdOutlineKeyboardArrowDown, MdOutlineExitToApp} from "react-icons/md"

export default function Navbar() {

  const dropdownRef = useRef(null);
  // const [active, setActive] = useDetectClick(dropdownRef, false)

  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__menu'>
          <MdMenu />
        </div>
        <div className='navbar__items'>
          {/* <ButtonDarkMode /> */}
          <div className='navbar__items--item'>
              {/* put onClick={() => setOpen(!open)} */}
              <MdNotificationsNone />
              <span className='item--counter'>1</span>
              {/* put in <span> {notifications.length} */}
              {/* add element <button className="nButton" onClick={handleRead}>Mark as read</button> */}
          </div>
          {/* {open && (
              <div className='notifications'>
                  {notifications.map(n => displayNotification)}
              </div>
              )
          } */}

          <div className='navbar__items--item'>
            <div className='item__usuario'>
              <img 
                className='item--avatar'
                src='https://i.ibb.co/7yBdxZ6/Whats-App-Image-2022-07-29-at-1-54-25-AM.jpg'
                alt='avatar'
                loading='lazy'
              />   
              <span>Ususario 1</span>
              <div className='dropdown'>
                <button className='dropdown__container'>
                  <MdOutlineKeyboardArrowDown />
                </button>
                {/* <nav
                  ref={dropdownRef}
                  // className={`menu ${active ? "active" : "inactive"}`}
                >
                  <ul>
                    <li>
                      <MdOutlineExitToApp />
                      <span>Cerrar sesión</span>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
