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
    {text: 'Do one thing every day that scares you.', author: 'Eleanor Roosevelt'},
    {text: 'Genius is making complex ideas simple, not making simple ideas complex.', author: 'Albert Einstein'},
    {text: 'Improving your mental health means training your ability to focus on what gives you joy and not on what brings you down.', author: ''},
    {text: 'It is during our darkest moments that we must focus to see the light.', author: ''},
    {text: 'Life is really simple, but we insist on making it complicated.', author: ''},

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
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Software Architecture"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/softwarearchitecture.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Design Thinking"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/designthinking.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Mental Health"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      reverse
    />
  </Section>
    );
  }
}

export { VerticalFeatures };
