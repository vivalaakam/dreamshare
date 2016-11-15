import React, { PropTypes } from 'react';
import style from './Block.scss';

export default function Block({ title, children }) {
  return (
    <div className={style.Block}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
