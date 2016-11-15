import React from 'react';
import style from './Header.scss';

export default function Header() {
  return (
    <header className={style.Header}>
      <div className={style.main}>
        <div className={style.content}>
          <h1 className={style.title}>SHARE YOUR HOLIDAY DREAM</h1>
          <p className={style.desc}>And find the perfect partner to fullfill it</p>
          <button className={style.btn}>Find your holiday partner</button>
        </div>
      </div>
      <div className={style.back}>
        <img
          src={require('./back.png')}
          className={style.image}
          alt="back"
        />
      </div>
    </header>
  );
}
