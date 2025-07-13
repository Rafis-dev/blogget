import style from './PostDate.module.css';
// eslint-disable-next-line
export const PostDate = ({ dateTime, children }) => {
  return (
    <time className={style.date} dateTime={dateTime}>
      {children}
    </time>
  );
};
