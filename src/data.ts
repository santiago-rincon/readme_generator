import { type FormData } from "@types";
export const baseData: FormData = {
  name: "Cristian Santiago Rincón 👋",
  greeating: "Hola, mi nombre es",
  title: "Ingeniero electrónico y desarrollador web",
  description:
    "Soy un ingeniero electrónico apasionado por la innovación tecnológica y con habilidades en desarrollo web. Con una sólida formación en ingeniería electrónica, estoy constantemente buscando nuevas oportunidades para fusionar mi conocimiento técnico con mis habilidades en desarrollo web aplicando las nuevas tecnologías del mercado.\nTengo un sólido conocimiento en desarrollo web, donde he adquirido habilidades en HTML, CSS y JavaScript. He trabajado en el desarrollo de sitios web interactivos y responsivos, usando frameworks de desarrollo como Angular, Bootstrap, TailwindCSS, entre otros. He integrado servicios en la nube de Firebase como autenticación de usuarios, hosting y servicio de base de datos en tiempo real.",
  subtitle: "Más sobre mí",
  subdescription:
    "Soy un comunicador efectivo y me gusta trabajar en equipo. Estoy constantemente actualizando mis habilidades y conocimientos en ingeniería electrónica y desarrollo web de manera autónoma, ya sea a través de cursos en línea, participación en conferencias o proyectos personales.",
  tecnologiesTitle: "Algunas de las tecnologías que manejo son:",
  tecnologies: [
    {
      id: crypto.randomUUID(),
      name: "React",
      backgroundColor: "ffffff",
      colorLogo: "61dafb",
      badge:
        "https://img.shields.io/badge/react-fff?style=for-the-badge&logo=react&logoColor=61dafb",
    },
    {
      id: crypto.randomUUID(),
      name: "Astro",
      backgroundColor: "ffffff",
      colorLogo: "ea5c08",
      badge:
        "https://img.shields.io/badge/astro-fff?style=for-the-badge&logo=astro&logoColor=ea5c08",
    },
  ],
  socialTitle: "Encuéntrame en:",
  social: [
    {
      id: crypto.randomUUID(),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/cristian-santiago-rincon-caicedo/",
      backgroundColor: "ffffff",
      colorLogo: "0a65c1",
      badge:
        "https://img.shields.io/badge/LinkedIn-fff?style=for-the-badge&logo=LinkedIn&logoColor=0a65c1",
    },
    {
      id: crypto.randomUUID(),
      name: "Porfolio",
      link: "https://porfolio-cristian-santiago-rincon-caicedos-projects.vercel.app/",
      backgroundColor: "ffffff",
      colorLogo: "0a65c1",
      badge:
        "https://img.shields.io/badge/Porfolio-fff?style=for-the-badge&logo=porfolio&logoColor=0a65c1",
    },
  ],
  projectsTitle: "Algunos de mis proyectos son:",
  projects: [
    {
      id: crypto.randomUUID(),
      title: "App Coffee GUI",
      link: "https://app-coffee-gui.web.app/home",
    },
    {
      id: crypto.randomUUID(),
      title: "App de trasnporte",
      link: "https://transport-app-26.web.app/login",
    },
    {
      id: crypto.randomUUID(),
      title: "Screen Recorder",
      link: "https://screen-recorder-psi-eosin.vercel.app/",
    },
  ],
};
