/**
 * Created by WebStorm.
 * User: po1son
 * Date: 2021/02/11
 * Time: 01:36
 */
import { GlobalOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { getLocale, setLocale } from 'umi';
import React from 'react';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

interface SelectLangProps {
  className?: string;
}

const SelectLang: React.FC<SelectLangProps> = (props) => {
  const { className } = props;
  const selectedLang = getLocale();

  const changeLang = ({ key }: any): void => setLocale(key, false);

  const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
  const languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
    'pt-BR': 'Português',
  };
  const languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇺🇸',
    'pt-BR': '🇧🇷',
  };
  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map((locale) => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
          <i className='far fa fa-language'/>
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
