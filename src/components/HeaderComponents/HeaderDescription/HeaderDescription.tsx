import { icons } from '../../../data/data';

export const HeaderDescription = () => {
  const iconHeader = icons.slice(0, 7).map((icon) => (
    <div
      className="card-icon-header"
      key={icon.id}
    >
      <img
        className="icon-img"
        src={icon.urlImage}
        alt={icon.name}
      />
    </div>
  ));

  return (
    <div className="header-description-content">
      <div className="description-content">
        <h1 className="header-title">👋 ¡Hola! Soy Pedro</h1>
        <p className="header-p">
          Desarrollador web con experiencia en WordPress y ReactJS. Desde 2021
          construyo sitios en Wordpress, modernos y pensados para generar
          resultados reales.
        </p>
        <p className="header-p">
          También disfruto programar en JavaScript usando ReactJS, creando
          interfaces dinámicas y experiencias digitales eficientes.
        </p>
      </div>
      <div className="header-tech-icon">{iconHeader}</div>
    </div>
  );
};
