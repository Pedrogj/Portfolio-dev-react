import logoJs from "../../public/images/js.png"
import logoHtml from "../../public/images/html-5.png"
import logoCss from "../../public/images/css-3.png"
import logoWP from "../../public/images/wordpress.png"
import logoReact from "../../public/images/react.png"
import logoTs from "../../public/images/typescript.png"
import logoSupa from "../../public/images/supabase.png"

interface DataIcons {
    id: number,
    name: string,
    urlImage: string,
}


export const icons : DataIcons[] = [
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
    }
]