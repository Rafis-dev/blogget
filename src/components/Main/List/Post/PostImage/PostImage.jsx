import style from './PostImage.module.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line
export const PostImage = ({ src, alt }) => {
  return <img className={style.img} src={src} alt={alt} />;
};

PostImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
