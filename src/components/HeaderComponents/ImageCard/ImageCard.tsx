import imgPerfil from '../../../../public/images/perfil.jpg';
import { ButtonLink } from '../../ButtonLink/ButtonLink';

export const ImageCard = () => {
  return (
    <div className="header-card-image">
      <img
        className="header-image"
        src={imgPerfil}
        alt="img-profile"
      />

      <div className="header-content-links">
        <ButtonLink
          label="Ver Portfolio"
          href="#"
        />
        <ButtonLink
          label="Contacto"
          href="#"
        />
      </div>
    </div>
  );
};
