import { VerticalFeatureRow } from '../components/VerticalFeatureRow';
import { Section } from '../components/Section';
import React from 'react';
import { shuffle } from '../utils/shuffle';

interface Quote {
  text: string;
  author: string;  
}

class VerticalFeatures extends React.Component {

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
    const quote = this.quotes[0];
    return (
      <Section
    title={quote?.text}
  >
    <VerticalFeatureRow
      title="Simplicity"
      description={
        <>
          <div>Too often software projects are highly overengineered. Keeping thing simple saves time and money.</div>
          <sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button>
        </>
      }
      image="/assets/images/simplicity.svg"
      imageAlt="Keep it Simple, S....."
    />
    <VerticalFeatureRow
      title="Software Architecture"
      description={
        <>
          <div>By designing software in a way that is clean and fairly simple to grok for all developers, ensures that it can be easily tested, used and expanded.</div>
          <sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button>
        </>
      }
      image="/assets/images/softwarearchitecture.svg"
      imageAlt="Clean and simple Software Architecture is highly valuable."
      reverse
    />
    <VerticalFeatureRow
      title="Design Thinking"
      description={
        <>
          <div>Including users and decision-makers in a solid design process allows for crafting simple, innovative and precise prototypes. No need to develop features that will not be used.</div>
          <sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button>
        </>
      }
      image="/assets/images/designthinking.svg"
      imageAlt="Only develop what is actually needed."
    />
    <VerticalFeatureRow
      title="Mental Health"
      description={
        <>
          <div>Being mindful of your focus in order to control your thoughts can free you from stress and anxiety. You can train your focus and gain a better well-being.</div>
          <sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button>
        </>
      }
      image="/assets/images/mentalhealth.svg"
      imageAlt="Control your dominant mental attitude"
      reverse
    />
  </Section>
    );
  }
}

export { VerticalFeatures };
