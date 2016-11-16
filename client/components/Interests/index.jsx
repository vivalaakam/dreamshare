import React, { Component } from 'react';
import { Inp, Btn } from '../UI';
import style from './Interests.scss';

export default class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className={style.Interests}>
        <div className={style.desc}>Hi! What are your holiday interests?</div>
        <div className={style.row}>
          <div className={style.inp}>
            <Inp
              value={this.state.text}
              onChange={::this.changeText}
              placeholder="Enter your insterests"
            />
          </div>
          <div className={style.btn}>
            <Btn >Search partners</Btn>
          </div>
        </div>
      </div>
    );
  }
}
