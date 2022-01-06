import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center">
    <div className="mr-12">
      <Link href="/">
        <sl-avatar image="/assets/images/avatar-small.jpeg"></sl-avatar>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex space-x-8 items-center font-medium text-xl text-gray-800">
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
