import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <sl-avatar image="/assets/images/avatar-small.jpeg"></sl-avatar>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          //@apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          //@apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
