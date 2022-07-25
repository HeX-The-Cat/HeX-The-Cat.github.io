import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className=" transparencyGray p-3">
        <nav>
            <ul className=" flex justify-center">
                <li className=" p-1">
                  <NavLink to="/">
                    home
                  </NavLink>
                </li>
                <li className=" p-1">
                  <NavLink to="gear" >
                    gear
                  </NavLink>
                </li>
                <li className=" p-1">
                  <NavLink to="games" >
                    games
                  </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default NavBar