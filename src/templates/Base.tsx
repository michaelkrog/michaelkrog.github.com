import { Meta } from '../components/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../components/Footer';
import { ReactNode } from 'react';
import { Header } from '../components/header';

type IBaseTemplateProps = {
  children: ReactNode;
  hero?: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header>{props.hero}</Header>
    {props.children}
    <Footer />
  </div>
);

export { BaseTemplate as Base };
