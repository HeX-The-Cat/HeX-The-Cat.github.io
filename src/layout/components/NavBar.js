import { NavLink } from "react-router-dom";
import '../../index.css'

const NavBar = () => {
    return (
      <div className=" p-3">
        <nav>
            <ul className=" flex justify-center">
                <li className=" py-1 px-2">
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="introduction" > Introduction </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="gear" > Gear </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="games" > Games </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="links"> Links </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="trello" > Trello </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default NavBar