import { NavLink } from "react-router";

import "./style.css";

export default function Menu() {
  const toMap = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Weather",
      path: "/weather",
    },
    {
      id: 5,
      name: "Register",
      path: "/register",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="menu">
        {toMap.map((e) => (
          <NavLink
            to={e.path}
            key={e.id}
            className={({ isActive }) => (isActive ? "ActiveLi" : "UnactiveLi")}
          >
            <li>{e.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
