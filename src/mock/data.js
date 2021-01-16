import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kabir Kakkar',
  subtitle: "I'm starting my journey on Web Development",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Kabir is looking to build a professional foundation in Web Development, Machine Learning and Data Analysis. ',
  paragraphTwo: 'He is a disciplined and industrious emerging professional with the drive and skills to make a positive impact.',
  paragraphThree: 'Currently a final student at Manipal University Jaipur pursuing B.Tech',
  resume: 'https://kabir-kakkar.github.io/Kabir%20Kakkar.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Demand Forecasting',
    info: 'This Project uses MLlib to help enterprises predict sales and even get  a detailed analysis of their ongoing sales paradigm with the help of a BI tool.',
    info2: '',
    url: '',
    repo: 'https://github.com/kabir-kakkar/Demand-Forecasting', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Predicting Age and Gender Using OpenCV',
    info: 'This Project uses a Wide Residual Network and opens a real time webcam through which the Network determines the Age and Gender of the person',
    info2: '',
    url: '',
    repo: 'https://github.com/kabir-kakkar/Age-and-Gender-Prediction', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kabir.kakkar4@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kabir-kakkar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kabir-kakkar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
