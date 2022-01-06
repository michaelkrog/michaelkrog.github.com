import { ReactNode } from 'react';

type ISectionProps = {
  quote?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {props.children}

    {props.quote && (
      <div className="mt-12 text-center py-16 bg-slate-50 rounded">
        {props.quote && (
          <h2 className="text-xl text-gray-400 font-mono">"<span className="text-gray-500">{props.quote}</span>"</h2>
        )}
      </div>
    )}


  </div>
);

export { Section };
