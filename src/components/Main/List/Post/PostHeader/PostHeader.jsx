import style from './PostHeader.module.css';
import { Text } from '../../../../../UI/Text';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line
export const PostHeader = ({ title, author, markdown, id }) => {
  const { page } = useParams();
  return (
    <div className={style.content}>
      <Text As="h2" className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text size={18} tsize={24} className={style.linkPost}>
            {title}
          </Text>
        </Link>
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

PostHeader.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};
