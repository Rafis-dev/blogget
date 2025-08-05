import style from './List.module.css';
import Post from './Post';
import { usePosts } from '../../../hooks/usePosts';

export const List = () => {
  const [posts] = usePosts();

  return (
    <ul className={style.list}>
      {posts.map(postData => (
        <Post key={postData.data.id} postData={postData.data} />
      ))}
    </ul>
  );
};
