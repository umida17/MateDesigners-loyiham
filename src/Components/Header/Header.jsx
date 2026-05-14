
import React from 'react'

 
import group from "../../assets/Group.png";

const Header = () => {
  return (
    <div>
      <header>
        <div className="conatiner">
            <div className="header-container">
            <img src={group} alt="" />

            <div className="home">
                <a href="#"></a>
            </div>

        <select name="" id="">
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
