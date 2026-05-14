import React from 'react';
// import { useTranslation } from 'react';
import group from "../../assets/Group.png";
import './Header.css';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';




const Header = () => {
  const {t, i18n } = useTranslation(); 

  const handleChangeLanguage = (event) => {
   i18n.changeLanguage(event.target.value);
  };

  return (
    <header className='header'>
      <div className="container">
        <div className="header-container">
          <img src={group} alt="Logo" />

          <div className="home">
            <a href="#">{t("header.Home")}</a>
            <a href="#">{t("header.About")}</a>
            <a href="#">{t("header.Services")}</a>
            <a href="#">{t("header.Work")}</a>
            <a href="#">{t("header.Blog")}</a>
         

          <select name="" id="" onChange={handleChangeLanguage} value={i18n.language}>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
             </select>
             </div>
        </div>
      </div>
    </header>
  );
};

export default Header;