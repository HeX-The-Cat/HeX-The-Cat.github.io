import { NavLink } from "react-router-dom";
import '../../index.css'

const NavBar = () => {
    return (
      <>
        <nav className=" h-full items-center">
            <ul className=" h-full flex items-stretch justify-center">
                <li className=" flex px-2 items-center">
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li className=" flex px-2 items-center">
                  <NavLink to="introduction"> Introduction </NavLink>
                </li>
                <li className=" flex px-2 items-center">
                  <NavLink to="gear" > Gear </NavLink>
                </li>
                <li className=" flex px-2 items-center">
                  <NavLink to="games" > Games </NavLink>
                </li>
                <li className=" flex px-2 items-center">
                  <NavLink to="cssthingy"> CSS Thingy </NavLink>
                </li>
                <li className=" flex px-2 items-center">
                  <NavLink to="trello" > Trello </NavLink>
                </li>
            </ul>
        </nav>
      </>
    )
}

export default NavBar