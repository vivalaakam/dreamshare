import React from 'react';
import Header from '../Header';
import Block from '../Block';
import HowItWork from '../HowItWork';
import style from './App.scss';

export default function App() {
  const howItWorks = [
    {
      step: 'step 1',
      title: 'Sed leo enim, condimentum',
      description: `Quisque libero libero, dictum non turpis in, luctus semper lorem. 
      Donec rhoncus a leo sit amet facilisis.`,
      image: 'step1.png'
    },
    {
      step: 'step 2',
      title: 'Morbi velit risus',
      description: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.',
      image: 'step2.png'
    },
    {
      step: 'step 3',
      title: 'Sed leo enim, condimentum',
      description: `Quisque libero libero, dictum non turpis in, luctus semper lorem. 
      Donec rhoncus a leo sit amet facilisis.`,
      image: 'step3.png'
    }
  ];

  const steps = () => howItWorks.map(step => <HowItWork {...step} />);

  return (
    <div className={style.App}>
      <Header />
      <Block title="How Dreamshare works?">
        {steps()}
      </Block>
    </div>
  );
}
