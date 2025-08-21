import { Text } from '../../../UI/Text';
import style from './HomePage.module.css';
import PropTypes from 'prop-types';

export const HomePage = ({ token }) => (
  <>
    {token ? (
      <>
        <Text As="h2" center className={style.title}>
          Стартовая страница
        </Text>
        <Text As="p" center className={style.welcome}>
          Добро пожаловать!
        </Text>
        <Text As="p" center>
          Выберите категорию
        </Text>
      </>
    ) : (
      <Text As="h2" center color="orange">
        Нужно авторизоваться
      </Text>
    )}
  </>
);

HomePage.propTypes = {
  token: PropTypes.string,
};
