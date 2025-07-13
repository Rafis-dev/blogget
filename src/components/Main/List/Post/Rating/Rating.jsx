import style from './Rating.module.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line
export const Rating = ({ ups }) => {
  return (
    <div className={style.rating}>
      <button
        className={style.up}
        type="button"
        aria-label="Повысить рейтинг"
      />
      <p className={style.ups}>{ups}</p>
      <button
        className={style.down}
        type="button"
        aria-label="Понизить рейтинг"
      />
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
