import imdb from "./assets/images/IMDB-Clone.png";
import recipe from "./assets/images/Food-Recipe-Finder.png";
import todo from "./assets/images/Todo.png";
import blackjack from "./assets/images/BlackJack-Card-Game.png";
import gridGame from "./assets/images/2048.png";

const logotext = "Laxman";
const meta = {
  title: "Laxman Aavuladoddi",
  description:
    "I’m Laxman Aavuladoddi Front End React Devloper, Currently Working Block Stack Pvt Ltd",
};

const introdata = {
  title: "I’m Laxman Aavuladoddi",
  animated: {
    first: "React Developer",
    second: "Front End Web Developer",
    third: "Freelancer",
    // second: "I love coding",
    // third: "Transforming Designs into Dynamic Websites",
    fourth: "Turning Ideas into Digital Reality",
  },
  description:
    "I will make your ideas come alive on the internet with my web development skills. Get your website built now!",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "About myself",
  aboutme:
    "I'm a front-end React web developer and Freelancer with strong skills in HTML, CSS, and JavaScript. Within two months of joining my current company, I was honored with the Best Employee Award. With expertise in React and JavaScript, I have a proven track record of delivering successful projects as a freelancer.",
};
const worktimeline = [
  {
    jobtitle: "Associate Engineer",
    company: "Block Stack Pvt Ltd",
    where: "Bangalore",
    date: "Since 2022-March",
  },
  // {
  //   jobtitle: "Designer of week",
  //   where: "Jamalya",
  //   date: "2019",
  // },
  // {
  //   jobtitle: "Designer of week",
  //   where: "ALquds",
  //   date: "2019",
  // },
];

const skills = [
  {
    name: "JavaScript",
    value: 90,
    name2: "TypeScript",
    value2: 85,
  },
  {
    name: "HTML",
    value: 95,
    name2: "CSS",
    value2: 90,
  },
  {
    name: "React",
    value: 95,
    name2: "Redux",
    value2: 90,
  },
  {
    name: "Bootstrap",
    value: 100,
    name2: "React-Bootstrap",
    value2: 100,
  },
  {
    name: "Material UI",
    value: 95,
    name2: "Tailwind",
    value2: 95,
  },
  {
    name: "Antd",
    value: 95,
    name2: "Styled Components,",
    value2: 90,
  },

  {
    name: "Jquery",
    value: 80,
    name2: "NodeJS",
    value2: 70,
  },
  {
    name: "NextJS",
    value: 75,
    name2: "React Native",
    value2: 70,
  },
];
const tools = [
  {
    name: "Git",
    name2: "Github",
  },
  {
    name: "Bitbucket",
    name2: "Postman",
  },
  {
    name: "Chrome dev tools",
    name2: "VS Code",
  },

  {
    name: "Jira",
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: imdb,
    name: "IMDB Clone",
    description:
      "This react project features movie and TV show listings with favorites, filtering, and search functionality. Additionally, it includes user authentication with signup, signin, and logout capabilities.",
    link: "https://imdb-clone-web.netlify.app/",
    sourceCode: "https://github.com/laxman939/IMDb-Clone",
  },
  {
    img: recipe,
    name: "Food Recipe Finder",
    description:
      "This is a straightforward recipe finder application featuring modals to display detailed recipe information. I've implemented the Edamam public API to enhance the functionality.",
    link: "https://laxman939.github.io/food_recipe_finder/",
    sourceCode: "https://github.com/laxman939/food_recipe_finder",
  },
  {
    img: todo,
    name: "Todo",
    description:
      "Todo application enables users to add, mark tasks as completed, and delete them. It employs local storage for persistent storage of todos, ensuring a seamless user experience.",
    link: "https://todo-a25f3.web.app/",
    sourceCode: "https://github.com/laxman939/todo-app",
  },
  {
    img: blackjack,
    name: "Blackjack Card Game",
    description:
      "The JavaScript-based Blackjack game project offers an interactive web-based version of the classic card game. Players can bet, receive cards, and make decisions against a computer dealer, all within an engaging user interface created with HTML and CSS.",
    link: "https://laxman939.github.io/BlackJack-Game/",
    sourceCode: "https://github.com/laxman939/BlackJack-Game",
  },
  {
    img: gridGame,
    name: "2048 Grid Game",
    description:
      "2048 is a web-based game created with JavaScript, HTML, and CSS. Players merge numbered tiles to reach the '2048' tile in a minimalist design.",
    link: "https://grid-game-2048.netlify.app/",
    sourceCode: "https://github.com/laxman939/2048-Game",
  },
];

const contactConfig = {
  YOUR_EMAIL: "ramlaxman947@gmial.com",
  YOUR_FONE: "+91 8686606625",
  description:
    "Want to discuss about your new project? Just leave me a message and I will get back to you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_3fdgecl",
  YOUR_TEMPLATE_ID: "template_t5v9nzf",
  YOUR_USER_ID: "Wn1pOWUkQWX0jYseV",
};

const socialprofils = {
  github: "https://github.com/laxman939",
  linkedin: "https://www.linkedin.com/in/ram-laxman/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  tools,
};
