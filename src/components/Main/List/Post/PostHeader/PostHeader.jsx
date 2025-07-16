import style from './PostHeader.module.css';
import { Text } from '../../../../../UI/Text';
// eslint-disable-next-line
export const PostHeader = ({ title, author }) => {
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Text
          As="a"
          size={18}
          tsize={24}
          className={style.linkPost}
          href="#post"
        >
          {title}
        </Text>
      </Text>
      <Text
        As="a"
        size={12}
        tsize={14}
        color="orange"
        className={style.linkAuthor}
        href="#author"
      >
        {author}
      </Text>
    </div>
  );
};
