import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

// eslint-disable-next-line
export const Logo = () => {
  return (
    <a href="/" className={style.link}>
      <img className={style.logo} src={logo} alt="логотип Blogget" />
    </a>
  );
};
