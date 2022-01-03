import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Daily text"
    description="Improving your mental health means training your ability to focus on what gives you joy and not on what brings you down."
  >
    <VerticalFeatureRow
      title="Simplicity"
      description={
        <>
          <i>"Genius is making complex ideas simple, not making simples ideas complex"</i>
          <span> - Albert Einstein</span>
        </>
      }
      image="/assets/images/simplicity.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Software Architecture"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
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

export { VerticalFeatures };
