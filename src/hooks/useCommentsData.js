import { useState, useEffect, useContext } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useCommentsData = id => {
  const [post, setPost] = useState(null); // Данные поста
  const [comments, setComments] = useState([]); // Массив комментариев
  const [loading, setLoading] = useState(true);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error('Unauthorized (401)');
        }
        return response.json();
      })
      .then(([postData, commentsData]) => {
        // Разбираем данные поста
        const postInfo = postData.data.children[0].data;

        // Разбираем массив комментариев
        const commentsList = commentsData.data.children.map(item => item.data);

        // Сохраняем в стейт
        setPost(postInfo);
        setComments(commentsList);
      })
      .catch(err => {
        console.error('Ошибка при получении данных с Reddit:', err);
      })
      .finally(() => setLoading(false));
  }, [token, id]); // Обновляем при изменении token или id

  // Возвращаем объект, чтобы было читаемо
  return { post, comments, loading };
};
