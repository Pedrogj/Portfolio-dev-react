import imgProject from "../../../public/images/project-img.jpg";

export const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Proyectos</h1>
      <div className="project-card-wrapper">
        <div className="project-card">
          <img className="img-project" src={imgProject} alt="img-project" />
          <div className="project-info-content">
            <h2 className="project-card-title">Name Project</h2>
            <ul className="project-item-wrapper">
              <li className="project-item-tecnology">ReactJs</li>
              <li className="project-item-tecnology">React Router</li>
              <li className="project-item-tecnology">Context Api</li>
              <li className="project-item-tecnology">Context Api</li>
            </ul>
            <a className="button-link" href="#">
              Ver más
            </a>
          </div>
        </div>
        <div className="project-card">
          <img className="img-project" src={imgProject} alt="img-project" />
          <div className="project-info-content">
            <h2 className="project-card-title">Name Project</h2>
            <ul className="project-item-wrapper">
              <li className="project-item-tecnology">ReactJs</li>
              <li className="project-item-tecnology">React Router</li>
              <li className="project-item-tecnology">Context Api</li>
            </ul>
            <a className="button-link" href="#">
              Ver más
            </a>
          </div>
        </div>
        <div className="project-card">
          <img className="img-project" src={imgProject} alt="img-project" />
          <div className="project-info-content">
            <h2 className="project-card-title">Name Project</h2>
            <ul className="project-item-wrapper">
              <li className="project-item-tecnology">ReactJs</li>
              <li className="project-item-tecnology">React Router</li>
              <li className="project-item-tecnology">Context Api</li>
            </ul>
            <a className="button-link" href="#">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
