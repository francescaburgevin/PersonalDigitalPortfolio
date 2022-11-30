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
      projectThumbnail: "/images/portfolio_large.png",
      projectBaseline: "Une carte de visite",
      projectDescription: "3 pages pour me présenter : A propos, CV et Projets.",
      projectPoints: ["Site web responsive design", "API vers GitHub Repo"],
      projectTechs: ["HTML", "SCSS", "React.js"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "TipCalculatorUSA",
      projectTitle: "Calculateur de gratuité Etats-Unis",
      projectThumbnail: "/images/tip_large.png",
      projectBaseline: "Pour vous rendre la vie plus facile",
      projectDescription: "Premier projet en JavaScript sans avoir jamais eu un cours en JS.",
      projectPoints: ["Front End Mentor project"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Montessori",
      projectTitle: "Feed d'une école Montessori",
      projectThumbnail: "/images/montessori_large.png",
      projectBaseline: "Garder le lien entre parents et école.",
      projectDescription: "Le projet a été présenté à la fin de ma formation intensive. Un site avec un espace privé permettant de partager des images et des annonces avec les parents. Plusieurs tables, complexité des tables croisées, contrôles de sécurité au login et sur chaque page sensible.",
      projectPoints: ["Site web responsive design", "Mobile-First", "MVC", "CRUD", "Espace privée"],
      projectTechs: ["HTML", "CSS", "Javascript", "PHP", "MySQL"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "RomaSpa",
      projectTitle: "Centre de bien-être de luxe: Roma",
      projectThumbnail: "/images/roma_large.png",
      projectBaseline: "Revenir à soi-même",
      projectDescription: "Un site représentatif du centre de bien-être exceptionnel. Projet réalisé en trinôme avec 2 élèves du cours. J'ai codé pour la première fois avec JSON pour passer les informations entre les pages. Création d'une page login.",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "AngularFirstLook",
      projectTitle: "Premier projet en Angular",
      projectThumbnail: "/images/angular_first_large.png",
      projectBaseline: "Projet simple pour démarrer.",
      projectDescription: "Un simple introduction au fonctionnement de ce framework. Création des components, organisation des stylesheets.",
      projectPoints: ["Site web responsive design", "Comprendre le fonctionnement avec Components"],
      projectTechs: ["HTML", "CSS", "TypeScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "PHPBlogFirstLook",
      projectTitle: "PHP beginner project",
      projectThumbnail: "/images/fibonacci_large.png",
      projectBaseline: "What is PHP? How to build with MVC and CRUD data?",
      projectDescription: "First PHP project. First with MVC. First CRUD",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS", "PHP"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Fibonacci",
      projectTitle: "Small also project in JS",
      projectThumbnail: "/images/fibonacci_large.png",
      projectBaseline: "How to calculate the Fibonacci series.",
      projectDescription: "A simple calculator of the Fibonacci series.",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Discount",
      projectTitle: "Small project in JS",
      projectThumbnail: "/images/fibonacci_large.png",
      projectBaseline: "How to calculate the Fibonacci series.",
      projectDescription: "A simple calculator of the Fibonacci series.",
      projectPoints: ["Site web responsive design"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "ConsoleLogCalculator",
      projectTitle: "Small project in JS",
      projectThumbnail: "/images/fibonacci_large.png",
      projectBaseline: "Calculate to numbers.",
      projectDescription: "A simple calculator.",
      projectPoints: ["Simple"],
      projectTechs: ["HTML", "JavaScript"]
    }
  ]
};


export {
  skills,
  projects
};
