import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './Inp.scss';

export default function Inp({ value, onChange, placeholder = '', className = '' }) {
  const classname = classnames(style.Inp, className);
  return <input type="text" placeholder={placeholder} value={value} onChange={onChange} className={classname} />;
}

Inp.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
};
