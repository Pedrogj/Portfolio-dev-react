import { HeaderDescription } from '../HeaderDescription/HeaderDescription';
import { ImageCard } from '../ImageCard/ImageCard';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <ImageCard />
          <HeaderDescription />
        </div>
      </div>
    </header>
  );
};
