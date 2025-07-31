/* eslint-disable */
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useState, useContext } from 'react';

import { authContext } from '../../../context/authContext';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
/* eslint-disable max-len */
// eslint-disable-next-line
export const Auth = () => {
  const dispatch = useDispatch();
  const [logOutBtn, setLogOutBtn] = useState(false);
  const { auth, clearAuth } = useContext(authContext);

  const showLogOut = () => {
    setLogOutBtn(prevLogOut => !prevLogOut);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
    if (location.hash) {
      window.history.replaceState({}, '', '/');
    }
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button onClick={showLogOut} className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {logOutBtn && (
            <button onClick={logOut} type="button" className={style.logout}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
