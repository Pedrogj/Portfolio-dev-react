import imgPerfil from "../../../../public/images/perfil.jpg";

export const ImageCard = () => {
  return (
    <div className="header-card-image">
      <img className="header-image" src={imgPerfil} alt="img-profile" />

      <div className="header-content-links">
        <a className="header-links" href="#">
          Ver Portfolio
        </a>
        <a className="header-links" href="#">
          Contacto
        </a>
      </div>
    </div>
  );
};
