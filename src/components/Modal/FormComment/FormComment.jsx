import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/comment/commentAction';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef(null);
  const textRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
    formRef.current.reset();
    setFormVisible(false);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    if (formVisible) {
      textRef.current.focus();
    }
  }, [formVisible]);

  useEffect(() => {
    if (value) {
      setFormVisible(true);
    }
  }, [value]);

  return (
    <>
      {!formVisible ? (
        <button className={style.btn} onClick={() => setFormVisible(true)}>
          Написать комментарий
        </button>
      ) : (
        <form className={style.form} onSubmit={handleSubmit} ref={formRef}>
          <Text As="h3" size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            value={value}
            onChange={handleChange}
            ref={textRef}
          ></textarea>
          <button className={style.btn}>Отправить</button>
        </form>
      )}
    </>
  );
};
