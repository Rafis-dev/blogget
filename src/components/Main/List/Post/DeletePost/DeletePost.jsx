import style from './DeletePost.module.css';
import { ReactComponent as DeleteIcon } from '../img/delete.svg';
// eslint-disable-next-line
export const DeletePost = () => {
  return (
    <button className={style.delete}>
      <DeleteIcon />
    </button>
  );
};
