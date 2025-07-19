import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useEffect, useState } from 'react';
import { URL_API } from '../../../api/const';
/* eslint-disable max-len */
// eslint-disable-next-line
export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [logOutBtn, setLogOutBtn] = useState(false);

  const showLogOut = () => {
    setLogOutBtn(prevLogOut => !prevLogOut);
  };

  useEffect(() => {
    if (!token) {
      setAuth({});
      return;
    }

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          delToken();
          return;
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

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
            <button
              onClick={() => {
                delToken();
                setLogOutBtn(false);
              }}
              type="button"
              className={style.logout}
            >
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
