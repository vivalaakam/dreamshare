import React from 'react';
import style from './Footer.scss';

export default function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style.wrapper}>
        <div className={style.column}>
          <div className={style.title}>DREAMSHARE</div>
        </div>
        <div className={style.column}>
          <div className={style.title2}>Company</div>
          <ul className={style.list}>
            <li>About</li>
            <li>Contact</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Terms and Privacy</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={style.column}>
          <div className={style.title2}>Partners</div>
        </div>
        <div className={style.column}>
          <div className={style.logo}>
            <img src={require('./logo.png')} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
