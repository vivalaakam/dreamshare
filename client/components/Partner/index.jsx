import React, { PropTypes } from 'react';
import classnames from 'classnames';
import style from './Partner.scss';

export default function Partner({ photo, icon = false, name, desc }) {
  const getIcon = () => {
    if (icon) {
      return (
        <div className={style.iconWrapper}>
          <div className={classnames(style.icon, style[icon])} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className={style.Partner}>
      <div className={style.wrapper}>
        <div className={style.photoWrapper}>
          <img src={photo} className={style.photo} alt={name} />
          {getIcon()}
        </div>
        <h3 className={style.name}>{name}</h3>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
}

Partner.propTypes = {
  photo: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string
};
