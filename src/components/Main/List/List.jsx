import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'title1',
      author: 'nickname1',
      ups: 77,
      date: '2022-01-21T03:22:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'title2',
      author: 'nickname2',
      ups: 58,
      date: '2022-01-31T00:00:00.000Z',
      id: '345',
    },
    {
      thumbnail: '',
      title: 'title3',
      author: 'nickname3',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '567',
    },
    {
      thumbnail: '',
      title: 'title4',
      author: 'nickname4',
      ups: 124,
      date: '2022-02-24T08:45:00.000Z',
      id: '789',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
