export const formatDate = date => {
  const d = date * 1000;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(d));
};
