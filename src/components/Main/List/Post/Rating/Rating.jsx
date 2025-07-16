import style from './Rating.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

// eslint-disable-next-line
export const Rating = ({ ups }) => {
  return (
    <div className={style.rating}>
      <button
        className={style.up}
        type="button"
        aria-label="Повысить рейтинг"
      />
      <Text
        As="p"
        className={style.ups}
        size={12}
        tsize={16}
        bold
        color="grey8F"
      >
        {ups}
      </Text>
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
