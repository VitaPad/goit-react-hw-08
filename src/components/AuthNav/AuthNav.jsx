import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const buildLinkClassLog = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={buildLinkClassLog}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClassLog}>
        {" "}
        Log In
      </NavLink>
    </div>
  );
}
