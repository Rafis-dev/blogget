export const setToken = token => {
  if (token) {
    localStorage.setItem('bearer', token);
  } else {
    localStorage.removeItem('bearer');
  }
};

export const getToken = () => {
  // Сначала проверяем localStorage
  const token = localStorage.getItem('bearer');
  if (token) {
    return token;
  }

  // Если токена нет в localStorage и путь содержит /auth, извлекаем из хэша
  if (location.pathname.includes('/auth')) {
    const newToken = new URLSearchParams(location.hash.substring(1)).get(
      'access_token'
    );
    if (newToken) {
      setToken(newToken);
      return newToken;
    }
  }

  return '';
};
