import { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';
import { Text } from '../../../UI/Text';

import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as TopIcon } from './img/top.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as BestIcon } from './img/best.svg';
import { ReactComponent as HotIcon } from './img/hot.svg';
import { debounceRaf } from '../../../utils/debounce';

const LIST = [
  { value: 'Главная', Icon: HomeIcon },
  { value: 'Топ', Icon: TopIcon },
  { value: 'Лучшие', Icon: BestIcon },
  { value: 'Горячие', Icon: HotIcon },
].map(assignId);

// eslint-disable-next-line
export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [tabsBtn, setTabsBtn] = useState('add item');

  const handleTabsClick = value => {
    if (isDropdownOpen || isDropdown) {
      setTabsBtn(value);
    }
  };

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {tabsBtn}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({ value, id, Icon }) => (
            <li key={id} className={style.item}>
              <Text
                As="button"
                className={style.btn}
                onClick={() => handleTabsClick(value)}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
