import style from './PostHeader.module.css';
// eslint-disable-next-line
export const PostHeader = ({ title, author }) => {
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href="#post">
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href="#author">
        {author}
      </a>
    </div>
  );
};
