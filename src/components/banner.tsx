import React from 'react';
import { shuffle } from '../utils/shuffle';

import { CTABanner } from './CTABanner';
import { Section } from './layout/Section';

interface Quote {
  text: string;
  author: string;  
}

class Banner extends React.Component {
  quotes: Quote[] = shuffle([
    {text: 'Do one thing every day that scares you', author: 'Eleanor Roosevelt'},
    {text: 'Genius is making complex ideas simple, not making simple ideas complex', author: 'Albert Einstein'},
    {text: 'Improving your mental health means training your ability to focus on what gives you joy and not on what brings you down', author: ''},
    {text: 'It is during our darkest moments that we must focus to see the light', author: ''},
    {text: 'Life is really simple, but we insist on making it complicated', author: ''},
    {text: 'The perfect kind of architecture decision is the one which never has to be made', author: ''},
    {text: 'If you think good architecture is expensive, try bad architecture', author: ''},
    {text: 'The hardest part of design ... is keeping features out', author: ''}

  ]);

  render() {
    return (<Section>
      <CTABanner
        quote={this.quotes[0]?.text}
      />
    </Section>);
  }
}

export { Banner };
