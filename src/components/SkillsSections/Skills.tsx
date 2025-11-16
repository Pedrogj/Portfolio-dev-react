import { icons } from "../../data/data";

export const Skills = () => {
  return (
    <div className="skill-container">
      <h2 className="skill-title">Habilidades y tecnologías</h2>
      <p className="skill-description">
        Combino herramientas de diseño y desarrollo para crear experiencias
        digitales funcionales y atractivas.
      </p>
      <div className="skill-icon-wrapper">
        {icons.map((icon) => (
          <div key={icon.id} className="skill-card">
            <img src={icon.urlImage} alt={icon.name} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
