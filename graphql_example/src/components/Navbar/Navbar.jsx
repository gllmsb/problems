import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../navlinks';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt="Star wars logo" className={styles.logoImage}/>
        </div>
        <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          {navLinks.map((item) => (
            <li key={item.title}>
              <NavLink to={item.link} activeClassName={styles.active}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };


