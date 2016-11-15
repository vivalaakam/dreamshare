import React, { PropTypes } from 'react';
import style from './HowIrWork.scss';

export default function HowItWork({ step, title, description, image }) {
  return (
    <div className={style.HowItWork}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <span className={style.step}>{step}</span>
          <div className={style.title}>{title}</div>
          <div className={style.desc}>{description}</div>
        </div>
        <img src={image} alt={title} className={style.image} />
      </div>
    </div>
  );
}

HowItWork.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
};
