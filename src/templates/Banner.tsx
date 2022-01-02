import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      subtitle="#simplicity #softwarearchitecture #designthinking #mentalhealth"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <sl-button type="primary">Let me tell you how!</sl-button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
