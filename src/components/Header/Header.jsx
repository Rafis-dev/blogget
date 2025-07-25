import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

import { useContext, useEffect } from 'react';
import { URL_API } from '../../api/const';
import { tokenContext } from '../../context/tokenContext';

// eslint-disable-next-line
export const Header = () => {
  const { token } = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/1m7dezi`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};
