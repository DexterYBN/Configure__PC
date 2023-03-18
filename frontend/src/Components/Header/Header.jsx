import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssembles } from "../../features/assemblesSlice";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.users.token);

  const handleExit = () => {
    localStorage.clear();
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(fetchAssembles());
  }, [dispatch]);
  
  return (
    <div className={styles.header}>
      <div className={styles.logoBlock}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <div className={styles.logoText}>ATRIX</div>
      </div>
      <div className={styles.navigationBlock}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/configurator"
        >
          Собрать
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/assembly"
        >
          Сборки
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "6px",
            };
          }}
          className={styles.navigationButton}
          to="/about"
        >
          О нас
        </NavLink>
      </div>
      {token ? (
        <div className={styles.loginBlock}>
          <NavLink to={"/cart"}>
            <div className={styles.cart}></div>
          </NavLink>
          <button onClick={handleExit} className={styles.loginButton}>
            Выйти
          </button>
        </div>
      ) : (
        <div className={styles.loginBlock}>
          <NavLink to={"/login"}>
            <button className={styles.loginButton}>Войти</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
