import logoJs from "../../public/images/js.png";
import logoHtml from "../../public/images/html-5.png";
import logoCss from "../../public/images/css-3.png";
import logoWP from "../../public/images/wordpress.png";
import logoReact from "../../public/images/react.png";
import logoTs from "../../public/images/typescript.png";
import logoSupa from "../../public/images/supabase.png";

import projectImg1 from "../../public/images/project-img.jpg";
import projectImg2 from "../../public/images/img-project-2.jpg";
import projectImg3 from "../../public/images/img-project-3.jpg";

interface DataIcons {
  id: number;
  name: string;
  urlImage: string;
}

interface ProjectData {
  id: number;
  urlImage: string;
  title: string;
  tags: string[];
}

export const icons: DataIcons[] = [
  {
    id: 0,
    name: "JavaScript",
    urlImage: logoJs,
  },
  {
    id: 1,
    name: "Html",
    urlImage: logoHtml,
  },
  {
    id: 2,
    name: "Css",
    urlImage: logoCss,
  },
  {
    id: 3,
    name: "WordPress",
    urlImage: logoWP,
  },
  {
    id: 4,
    name: "React Js",
    urlImage: logoReact,
  },
  {
    id: 5,
    name: "TypeScript",
    urlImage: logoTs,
  },
  {
    id: 6,
    name: "Supabase",
    urlImage: logoSupa,
  },
];

export const projects: ProjectData[] = [
  {
    id: 1,
    urlImage: projectImg1,
    title: "Title-Project",
    tags: ["React", "Redux", "Context Api", "React Router"],
  },
  {
    id: 2,
    urlImage: projectImg2,
    title: "Title Project 2",
    tags: ["React", "Redux", "Context Api"],
  },
  {
    id: 3,
    urlImage: projectImg3,
    title: "Title Project 3",
    tags: ["React", "Redux", "Css"],
  },
];
