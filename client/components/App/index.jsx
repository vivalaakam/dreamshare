import React from 'react';
import Header from '../Header';
import Block from '../Block';
import HowItWork from '../HowItWork';
import Partner from '../Partner';
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

  const partners = [
    {
      name: 'Bradley Hunter',
      desc: 'Based in Chicago. I love playing tennis and loud music.',
      photo: 'photo1.png',
      icon: 'music'
    },
    {
      name: 'Marie Bennett',
      desc: 'Currently living in Colorado. Lover of art, languages and travelling.',
      photo: 'photo2.png',
      icon: 'draw'
    },
    {
      name: 'Diana Wells',
      desc: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.',
      photo: 'photo3.png',
      icon: 'photo'
    },
    {
      name: 'Christopher Pierce',
      desc: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.',
      photo: 'photo4.png',
      icon: 'fly'
    }
  ];

  const steps = () => howItWorks.map((step, i) => <HowItWork key={i} {...step} />);

  const partnerItems = () => partners.map((partner, i) => <Partner key={i} {...partner} />);

  return (
    <div className={style.App}>
      <Header />
      <Block title="How Dreamshare works?">
        <div className={style.howItWorks}>
          {steps()}
        </div>
      </Block>
      <Block title="Meet a partner for your best holiday">
        <div className={style.partners}>
          {partnerItems()}
        </div>
        <div className={style.navigation}>
          <button className={style.btn}>See other partners</button>
        </div>
      </Block>
    </div>
  );
}
