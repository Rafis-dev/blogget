import style from './List.module.css';
import Post from './Post';
import { usePosts } from '../../../hooks/usePosts';

export const List = () => {
  const [posts, loading] = usePosts();

  return (
    <>
      {loading && <p>Загрузка</p>}

      {!loading && (
        <ul className={style.list}>
          {posts.map(postData => (
            <Post key={postData.data.id} postData={postData.data} />
          ))}
        </ul>
      )}
    </>
  );
};
