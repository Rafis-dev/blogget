import style from './Comments.module.css';
import { PostDate } from '../../Main/List/Post/PostDate/PostDate';
import { Text } from '../../../UI/Text';
import { formatDate } from '../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Comments = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>Нет комментариев</p>;
  }

  return (
    <ul className={style.list}>
      {comments.map(
        com =>
          com.body && (
            <li className={style.item} key={com.id}>
              <Text As="h3" className={style.author} size={18} tsize={22}>
                {com.author}
              </Text>
              <Text As="p" className={style.comment} size={14} tsize={18}>
                {com.body}
              </Text>
              {com.created ? (
                <PostDate dateTime={com.created}>
                  {formatDate(com.created)}
                </PostDate>
              ) : (
                <p>Нет даты</p>
              )}
            </li>
          )
      )}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
