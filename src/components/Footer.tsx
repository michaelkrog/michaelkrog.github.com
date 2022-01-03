import Link from 'next/link';

import { Background } from './Background';
import { CenteredFooter } from '../components/CenteredFooter';
import { Section } from '../components/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        iconList={
          <>
            <Link href="/">
              <a>
                <sl-icon name="github"></sl-icon>
              </a>
            </Link>
            <Link href="/">
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
