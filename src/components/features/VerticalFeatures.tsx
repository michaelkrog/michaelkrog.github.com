import { VerticalFeatureRow } from './VerticalFeatureRow';
import { Section } from '../layout/Section';
import React from 'react';
import Link from 'next/link';


class VerticalFeatures extends React.Component {



  render() {
    return (
      <Section
  >
    <VerticalFeatureRow
      title="Simplicity"
      description={
        <>
          <div>Too often software projects are highly overengineered. Keeping thing simple saves time and money.</div>
          <Link href="/blog"><sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button></Link>
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
          <Link href="/blog"><sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button></Link>
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
          <Link href="/blog"><sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button></Link>
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
          <Link href="/blog"><sl-button size="small" class="mt-2" type="primary">Tell me more</sl-button></Link>
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
