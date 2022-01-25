import { Meta } from '../components/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../components/footer/Footer';
import { FunctionComponent, ReactNode } from 'react';
import { Header } from '../components/header/Header';

type IBaseTemplateProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  hero?: ReactNode;
};

const BaseTemplate: FunctionComponent<IBaseTemplateProps> = (props: IBaseTemplateProps) => {
  const title = props.title ?? AppConfig.title;
  const description = props.description ?? AppConfig.description;
  
  return <div className="antialiased text-gray-600">
    <Meta title={title} description={description} />
    <Header>{props.hero}</Header>
    {props.children}
    <Footer />
  </div>
};

export { BaseTemplate as Base };
