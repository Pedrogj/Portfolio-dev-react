import { projects } from "../../data/data";
import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Proyectos</h1>
      <div className="project-card-wrapper">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <p className="project-description">
        Cada proyecto lo desarrollo siguiendo un proceso definido y orientado a
        resultados. <br />
        Mi prioridad es ofrecer una experiencia fluida, con comunicación
        constante y transparencia en cada etapa.
      </p>
    </div>
  );
};
