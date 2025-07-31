export const setToken = token => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
    return token;
  }

  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1)).get('access_token');
    setToken(token);
    return token;
  }
};

// const delToken = () => {
//   setToken(null);
//   localStorage.removeItem('bearer');
//   // Очищаем hash из адресной строки
//   if (location.hash) {
//     window.history.replaceState({}, '', '/');
//   }
// };
