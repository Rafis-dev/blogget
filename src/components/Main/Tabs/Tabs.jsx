import style from './Tabs.module.css';
// eslint-disable-next-line
export const Tabs = () => {
  return (
    <ul className={style.list}>
      <li>
        <a href="/">Главная</a>
      </li>

      <li>
        <a href="/">Просмотренные</a>
      </li>

      <li>
        <a href="/">Сохраненные</a>
      </li>

      <li>
        <a href="/">Мои посты</a>
      </li>
    </ul>
  );
};
