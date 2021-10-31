import React, { ReactElement, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../context/authContext';

import classes from './NavBar.module.css';

interface Props {
  imgSrc: string;
  children: ReactElement | ReactElement[];
}

const NavBar = ({ imgSrc, children }: Props) => {
  const ctx = useContext(authContext);
  return (
    <>
      <nav className="w-full justify-between inline-flex p-5 shadow-md rounded-xl items-center bg-white">
        <div className="inline-flex lg:justify-start justify-between lg:w-auto">
          <svg
            className="m-5 md:mr-16 lg:hidden md:w-10 md:h-10 md:ml-8 w-5 h-5 text-gray-500 hover:text-green-600 "
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <div className="inline-flex">
            <img
              className="flex-shrink-0 rounded-2xl md:w-20 w-14 h-14 lg:w-14"
              src={imgSrc}
              alt="Logo"
            />
            <div className="flex ml-4 items-center justify-center">
              <h2 className="text-4xl font-bold justify-center">Match Eka</h2>
            </div>
          </div>
          <img
            src={imgSrc}
            alt="Profile Pic"
            className="md:hidden flex justify-self-end justify-center rounded-full h-14 border-4 border-gray-400"
          />
        </div>
        <div className="hidden lg:flex">
          <ul className="inline-flex font-semibold items-center">
            <li className={`navbar-link ${classes.Navigator}`}>
              <NavLink to="/" activeClassName={classes.Active} exact>
                Home
              </NavLink>
            </li>
            {/* <li className={`${classes.Navigator} navbar-link`}>
              <NavLink to="/rewards">Rewards</NavLink>
            </li> */}
            <li className={`${classes.Navigator} navbar-link`}>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
            {/* <li className={`${classes.Navigator} navbar-link`}>
              <NavLink to="/pastmatches">Previous Matches</NavLink>
            </li> */}
            <li className={`${classes.Navigator} navbar-link`}>
              <NavLink to="/about">About</NavLink>
            </li>
            {!ctx.token && (
              <li className={`${classes.Navigator} navbar-link`}>
                <NavLink to="/user/login">Login</NavLink>
              </li>
            )}
          </ul>
          <img
            src={imgSrc}
            alt="Profile Pic"
            className="rounded-full h-14 ml-8 border-4 border-gray-400"
          />
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
