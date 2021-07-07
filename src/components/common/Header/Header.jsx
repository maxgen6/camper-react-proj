import React from "react";

import './Header.scss'
import bg from '../../../img/Rectangle 1.png'
import Logo from "../../icons/Logo";
import ArrowDown from "../../icons/ArrowDown";
import User from "../../icons/User";
import Globe from "../../icons/Globe";

export default function Header() {
  return (
    <header className="header row">
      <div className="container">
        <div className="header-bg">
          <img src={bg} alt="bg"/>
        </div>
        <div className="col-12 col-md-10 offset-md-1">
          <ul className="header-list">
            <li className="header-list__item">
              <a href="#">
                <Logo />
              </a>
            </li>
            <li className="header-list__item">
              <ArrowDown />
              <User />
            </li>
          </ul>
        </div>
        <div className="header-info col-6 offset-md-1">
          <h2 className="header-info__title">
            Find out how we can <span>save your time</span> in Backpacking in Europe
          </h2>
          <p className="header-info__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </p>
          <a href="#" className="header-info__link">
            <Globe /> Explore
          </a>
        </div>
      </div>
    </header>
  )
}