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
      skillName: "React.JS",
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
      skillName: "WordPress",
      skillLogo: "#",
    },
    {
      skillName: "GitHub",
      skillLogo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      skillName: "Clouds",
      skillLogo: "",
    },
    {
      skillName: "phpMyAdmin",
      skillLogo: "",
    },
    {
      skillName: "Docker",
      skillLogo: "",
    },
    {
      skillName: "Lunacy",
      skillLogo: "",
    },
    {
      skillName: "Figma",
      skillLogo: "",
    },
    {
      skillName: "Avid",
      skillLogo: "",
    },
    {
      skillName: "Jest",
      skillLogo: "",
    },
    {
      skillName: "Enzyme",
      skillLogo: "",
    },
    {
      skillName: "VS Code",
      skillLogo: "",
    },
    {
      skillName: "Unix",
      skillLogo: "",
    },
    {
      skillName: "PrimeNG",
      skillLogo: "",
    },
    {
      skillName: "Bootstrap",
      skillLogo: "",
    }
  ]
};

const projects = {
  data: [
    {
      repoUsername: "francescaburgevin",
      projectRepo: "JavaFirstLook",
      projectTitle: "Premier Projet Java",
      projectThumbnail: "/images/under_construction.jpg",
      projectBaseline: "Liste de projets DIY, By You",
      projectDescription: "Premier projet avec Java / Spring Boot (autodidacte)",
      projectPoints: ["responsive design", "construction API", "autodidacte"],
      projectTechs: ["HTML", "SCSS", "Angular", "Java", "Spring Boot", "API"]
    }, {
      repoUsername: "francescaburgevin",
      projectRepo: "PersonalDigitalPortfolio",
      projectTitle: "Portfolio Digital",
      projectThumbnail: "/images/portfolio_large.png",
      projectBaseline: "Une carte de visite",
      projectDescription: "3 pages pour me présenter : A propos, CV et Projets. Mon premier projet en React (autodidacte)",
      projectPoints: ["responsive design", "API vers GitHub Repo", "autodidacte"],
      projectTechs: ["HTML", "SCSS", "React.js", "Docker", "Jest", "Enzyme"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "TipCalculatorUSA",
      projectTitle: "Premier Projet JS",
      projectThumbnail: "/images/tip_large.png",
      projectBaseline: "Calculatrice de gratuité Etats-Unis",
      projectDescription: "Un challenge Frontend Mentor. Mon premier projet en JavaScript en autodidacte.",
      projectPoints: ["Frontend Mentor", "calculs", "class", "onclick"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Montessori",
      projectTitle: "Montessori",
      projectThumbnail: "/images/montessori_large.png",
      projectBaseline: "Garder le lien entre parents et école.",
      projectDescription: "Un site et un feed privé comme projet de fin de formation. Le feed permet de partager des images et des annonces avec les parents. Plusieurs tables, complexité des tables croisées, contrôles de sécurité au login et sur chaque page sensible.",
      projectPoints: ["responsive design", "mobile-first", "MVC", "CRUD", "espace privée", "login", "database"],
      projectTechs: ["HTML", "CSS", "Javascript", "PHP", "MySQL"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "RomaSpa",
      projectTitle: "Centre de bien-être de luxe: Roma",
      projectThumbnail: "/images/roma_large.png",
      projectBaseline: "Revenir à soi-même",
      projectDescription: "Un site d'un centre de bien-être. Projet réalisé en trinôme avec 2 élèves du cours. J'ai codé pour la première fois avec JSON pour passer les informations entre les pages. Création d'une page login.",
      projectPoints: ["responsive design", "login avec système de sécurité", "panier", "JSON", "local storage"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "AngularFirstLook",
      projectTitle: "Premier Projet Angular",
      projectThumbnail: "/images/angular_first_large.png",
      projectBaseline: "Introduction au framework Angular",
      projectDescription: "Un site de recettes. Création des components, organisation des stylesheets.",
      projectPoints: ["responsive design", "components"],
      projectTechs: ["HTML", "CSS", "TypeScript"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "PHPBlogFirstLook",
      projectTitle: "Premier Projet PHP",
      projectThumbnail: "/images/php_first_blog.png",
      projectBaseline: "Introduction à PHP",
      projectDescription: "Un blog pour publier des articles. La structure MVC est construite avec des fonctionnalités CRUD et un database.",
      projectPoints: ["MVC", "CRUD", "database", "blog"],
      projectTechs: ["HTML", "CSS", "PHP"]
    },
    {
      repoUsername: "francescaburgevin",
      projectRepo: "Fibonacci",
      projectTitle: "Fibonacci",
      projectThumbnail: "/images/fibonacci_large.png",
      projectBaseline: "Calculer l'ensemble de rangs.",
      projectDescription: "En mathématiques, la suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent.",
      projectPoints: ["algorithme", "rangs de couleurs différentes"],
      projectTechs: ["HTML", "CSS", "JavaScript"]
    }
  ]
};

const assos = {
  data: [
    {
      logo: "/images/3WA.png",
      name: "3W Academy",
      link: "https://3wa.fr/formation-conventionnee-pole-emploi/",
      title: "Développeur Web de 3WA"
    },
    {
      logo: "/images/google_analytics.png",
      name: "Google Analytics",
      link: "https://analytics.google.com",
      title: "Google Analytics"
    },
    {
      logo: "/images/cna.png",
      name: "CEGEFOS Numérique Academy",
      link: "https://www.cegefos.com/integration-e-commerce/",
      title: "Intégration E-Commerce de CNA"
    },
    {
      logo: "/images/ptits_heros.png",
      name: "Les P'tits Héros",
      link: "https://lesptitsheros.fr/",
      title: "Les P'tits Héros"
    },
    {
      logo: "/images/efs.png",
      name: "EFS",
      link: "https://dondesang.efs.sante.fr",
      title: "Etablissement français du sang"
    },
    {
      logo: "/images/opera.png",
      name: "Opéra de Bordeaux",
      link: "https://www.opera-bordeaux.com",
      title: "Opéra de Bordeaux"
    },
    {
      logo: "/images/wset.png",
      name: "Wine Spirit Education Trust",
      link: "https://www.wsetglobal.com/fr/french-qualifications/level-3-award-in-wines-fr/",
      title: "WSET niveau 3"
    }
  ]
};


export {
  skills,
  projects,
  assos
};
