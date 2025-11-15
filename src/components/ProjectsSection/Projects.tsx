import imgProject from "../../../public/images/project-img.jpg";

export const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Proyectos</h1>
      <div className="project-card-wrapper">
        <div className="project-card">
          <img src={imgProject} alt="img-project" />
          <h2>Name Project</h2>
          <ul>
            <li>ReactJs</li>
            <li>React Router</li>
            <li>Context Api</li>
          </ul>
          <a href="#">Ver más</a>
        </div>
      </div>
    </div>
  );
};
