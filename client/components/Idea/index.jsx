import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './Idea.scss';

export default function Idea({ image, name, full = false }) {
  const className = classnames(style.Idea, {
    [style.full]: full
  });

  return (
    <div className={className}>
      <div className={style.wrapper}>
        <div className={style.name}>{name}</div>
        <img alt={name} src={image} className={style.image} />
      </div>
    </div>
  );
}

Idea.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  full: PropTypes.bool
};
