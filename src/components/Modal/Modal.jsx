import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { Comments } from './Comments/Comments';
import { useCommentsData } from '../../hooks/useCommentsData';
import { FormComment } from './FormComment/FormComment';
import { CommentsLoader } from '../../UI/CommentsLoader/CommentsLoader';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  const { post, comments, status } = useCommentsData(id);

  const handleClick = e => {
    const target = e.target;
    if (
      target === overlayRef.current ||
      (closeRef.current && closeRef.current.contains(target))
    ) {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  const handleEscBtn = e => {
    const target = e.key;
    if (target === 'Escape') {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscBtn);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscBtn);
    };
  }, []);

  if (status === 'loading') {
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <CommentsLoader />

          <button type="button" className={style.close} ref={closeRef}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  if (status === 'loaded') {
    const { title, author, selftext: markdown } = post;

    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <h2 className={style.title}>{title}</h2>

          <div className={style.content}>
            <Markdown
              options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>

          <p className={style.author}>{author}</p>

          <FormComment id={id} />
          <Comments comments={comments} />

          <button type="button" className={style.close} ref={closeRef}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
