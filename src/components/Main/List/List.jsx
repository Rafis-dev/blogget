import style from './List.module.css';
import Post from './Post';
import { usePosts } from '../../../hooks/usePosts';
import { PostsLoader } from '../../../UI/PostsLoader/PostsLoader';

export const List = () => {
  const [posts, loading] = usePosts();

  return (
    <>
      {loading && <PostsLoader className={style.loader} />}

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
