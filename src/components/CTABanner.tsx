
type ICTABannerProps = {
  quote?: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 items-center sm:p-12 border-blue-100 border rounded-md">
      <div className="text-2xl text-blue-300 italic">"<span className="text-blue-500">{props.quote}</span>"</div>
  </div>
);

export { CTABanner };
