import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.title && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-xl text-gray-300 font-mono">$ echo "<span className="text-gray-500">{props.title}</span>"</h2>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
