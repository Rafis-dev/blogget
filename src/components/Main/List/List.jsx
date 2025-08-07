import style from './List.module.css';
import Post from './Post';
import { PostsLoader } from '../../../UI/PostsLoader/PostsLoader';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/postsAction';
import { ScrollLoader } from '../../../UI/ScrollLoader/ScrollLoader';

export const List = () => {
  const { posts, loading } = useSelector(state => state.postsReducer);
  const [ScrolledTriggered, setScrolledTriggered] = useState(false);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const isInitialLoading = loading && posts.length === 0;
  const isLoadingMore = loading && ScrolledTriggered && posts.length > 0;

  useEffect(() => {
    if (loading || !endList.current) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          setScrolledTriggered(true);
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '1px',
      }
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, loading]);

  useEffect(() => {
    if (!loading && ScrolledTriggered) {
      setScrolledTriggered(false);
    }
  }, [loading, ScrolledTriggered]);

  return (
    <>
      {isInitialLoading && <PostsLoader />}

      <ul className={style.list}>
        {posts.map(postData => (
          <Post key={postData.data.id} postData={postData.data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>

      {isLoadingMore && <ScrollLoader />}
    </>
  );
};
