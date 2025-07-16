import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line
export const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
