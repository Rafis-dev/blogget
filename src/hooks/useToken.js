import { useState, useEffect } from 'react';

export const useToken = state => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get(
        'access_token'
      );
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    setToken(null);
    localStorage.removeItem('bearer');
    // Очищаем hash из адресной строки
    if (location.hash) {
      window.history.replaceState({}, '', '/');
    }
  };

  return [token, delToken];
};
