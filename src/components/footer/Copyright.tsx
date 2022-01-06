import { AppConfig } from '../../utils/AppConfig';

const Copyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. From Scandinavia with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    
  </div>
);

export { Copyright as FooterCopyright };
