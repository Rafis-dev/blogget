import style from './Error.module.css';
import { Text } from '../../../UI/Text';

export const Error = () => {
  console.log(style);
  return (
    <Text
      As="p"
      center
      color="red"
      bold
      dsize={26}
      tsize={20}
      className={style.message}
    >
      Увы и ах, такой страницы нет!
    </Text>
  );
};
