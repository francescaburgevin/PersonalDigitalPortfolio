import logoAngular from "./icons/logo_angular.png";
import logoMySql from "./icons/logo_mysql.png";
import logoSymfony from "./icons/logo_symfony.png";


const skills = {
  data: [
    {
      skillName: "HTML5",
      skillLogo: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    },
    {
      skillName: "CSS3",
      skillLogo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    },
    {
      skillName: "Sass",
      skillLogo: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
    },
    {
      skillName: "JavaScript",
      skillLogo: "https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png",
    },
    {
      skillName: "PHP",
      skillLogo: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
    },
    {
      skillName: "MySQL",
      skillLogo: logoMySql,
    },
    {
      skillName: "ReactJS",
      skillLogo: "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
    {
      skillName: "Node.JS",
      skillLogo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      skillName: "Angular",
      skillLogo: logoAngular,
    },
    {
      skillName: "Symfony",
      skillLogo: logoSymfony,
    },
    {
      skillName: "GitHub",
      skillLogo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    }
  ]
};

const projects = {
  data: [
    {
      repoUsername: "francescaburgevin",
      projectRepo: "PersonalDigitalPortfolio",
      projectTitle: "Portfolio Digital Perso",
      projectThumbnail: "https://i.pinimg.com/originals/69/c8/2d/69c82d4aad422e367ea821c2546b4312.png",
      projectBaseline: "Une carte de visite",
      projectDescription: "3 pages pour me présenter : A propos, CV et Projets.",
      projectPoints: ["Site web responsive design", "API vers GitHub Repo"],
      projectTechs: ["HTML", "SCSS", "React.js"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "TipCalculatorUSA",
      projectTitle: "Calculateur de gratuité Etats-Unis",
      projectThumbnail: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      projectBaseline: "Pour ne plus être dans le flou.",
      projectDescription: "Quand à Rome, faites comme les Romains!",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Montessori",
      projectTitle: "Feed d'une école Montessori",
      projectThumbnail: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      projectBaseline: "Garder le lien entre parents et école.",
      projectDescription: "Un site avec un espace privé permettant de partager des images et des annonces avec les parents.",
      projectPoints: ["Site web responsive design", "Mobile-First", "MVC", "CRUD", "Espace privée"],
      projectTechs: ["HTML", "CSS", "Javascript", "PHP", "MySQL"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "RomaSpa",
      projectTitle: "Centre de bien-être de luxe: Roma",
      projectThumbnail: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      projectBaseline: "Revenir à soi-même",
      projectDescription: "Un site représentatif du centre de bien-être exceptionnel.",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ]
};


export {
  skills,
  projects
};
