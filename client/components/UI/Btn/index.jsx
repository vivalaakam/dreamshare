import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './Btn.scss';

export default function Btn({ children, className = '', onClick, inverted = false }) {
  const classname = classnames(style.Btn, className, {
    [style.inverted]: inverted
  });
  return <button className={classname} onClick={onClick}>{children}</button>;
}

Btn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inverted: PropTypes.bool
};
