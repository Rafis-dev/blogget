import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../utils/formatDate';
import { Rating } from './Rating/Rating';
import { PostHeader } from './PostHeader/PostHeader';
import { PostImage } from './PostImage/PostImage';
import { PostDate } from './PostDate/PostDate';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;

  return (
    <li className={style.post}>
      <PostImage src={notphoto} alt={title} />

      <PostHeader title={title} author={author} />

      <Rating ups={ups} />

      <PostDate dateTime={date}>{formatDate(date)}</PostDate>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
