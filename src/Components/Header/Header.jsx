
import React, { useTranslation } from 'react'
 
import group from "../../assets/Group.png";
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';


const {t, i18n} = useTranslation
const handleChangeLanguage =(event)=>{
    i18n.changeLanguage(event.target.value)
}
const Header = () => {
  return (
    <div>
      <header>
        <div className="conatiner">
            <div className="header-container">
            <img src={group} alt="" />

            <div className="home">
                <a href="#">{t("header.home")}</a>
            </div>

        <select name="" id=""onChange={handleChangeLanguage}>
            <option value="uz">uz</option>
            <option value="ru">rus</option>
            <option value="eng">eng</option>
        </select>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
