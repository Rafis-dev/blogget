import { FadeLoader } from 'react-spinners';
import style from './PostsLoader.module.css';

export const PostsLoader = () => (
  <FadeLoader color="#cc6633" className={style.loader} />
);
