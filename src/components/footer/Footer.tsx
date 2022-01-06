import Link from 'next/link';

import { Background } from '../layout/Background';
import { CenteredFooter } from './CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        iconList={
          <>
            <Link href="https://github.com/michaelkrog">
              <a>
                <sl-icon name="github"></sl-icon>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/michael-krog-bbba2593/">
              <a>
                <sl-icon name="linkedin"></sl-icon>
              </a>
            </Link>
            
          </>
        }
      >
        
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
