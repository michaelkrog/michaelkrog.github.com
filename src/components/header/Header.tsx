import Link from "next/link";
import { ReactNode } from "react";
import { Background } from "../layout/Background";
import { Logo } from "./Logo";
import { NavbarTwoColumns } from "./NavbarTwoColumns";
import { Section } from "../layout/Section";

type IHeaderProps = {
    children: ReactNode;
  };

const Header = (props: IHeaderProps) => (
    <Background color="bg-gray-100">
        <Section yPadding="py-4">
          <NavbarTwoColumns logo={<Logo xl />}>
          <li>
              <Link href="/who-i-am">
                <a>Me</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
        {props.children}
    </Background>
);

export { Header };