import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

// eslint-disable-next-line
export const Header = ({ token, delToken }) => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth token={token} delToken={delToken} />
        </div>
      </Layout>
    </header>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
