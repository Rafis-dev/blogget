import style from './FormComment.module.css';
import { Text } from '../../../UI/Text';
import { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = () => {
  const [auth] = useAuth();
  const [formVisible, setFormVisible] = useState(false);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(textRef.current.value);
    formRef.current.reset();
    setFormVisible(false);
  };

  useEffect(() => {
    if (formVisible) {
      textRef.current.focus();
    }
  }, [formVisible]);

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
          <textarea className={style.textarea} ref={textRef}></textarea>
          <button className={style.btn}>Отправить</button>
        </form>
      )}
    </>
  );
};
