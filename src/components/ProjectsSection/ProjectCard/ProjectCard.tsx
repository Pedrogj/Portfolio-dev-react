import { ButtonLink } from '../../ButtonLink/ButtonLink';

interface ProjectProps {
  id: number;
  urlImage: string;
  title: string;
  tags: string[];
}

export const ProjectCard = ({ title, urlImage, tags }: ProjectProps) => {
  return (
    <div className="project-card">
      <img
        className="img-project"
        src={urlImage}
        alt="img-project"
      />
      <div className="project-info-content">
        <h2 className="project-card-title">{title}</h2>
        <ul className="project-item-wrapper">
          {tags.map((tag) => (
            <li
              key={tag}
              className="project-item-tecnology"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ButtonLink
          label="Ver más"
          href="#"
        />
      </div>
    </div>
  );
};
