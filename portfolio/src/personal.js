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
      projectRepo: "Portfolio",
      projectThumbnail: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      projectTitle: "title goes here",
      projectBaseline: "this is the baseline",
      projectDescription: "describe the description",
      projectPoints: ["bullet", "points", "are easy", "to read"],
      projectTechs: ["gots to", "list the", "technologies"]
    }
  ]
};


export {
  skills,
  projects
};
