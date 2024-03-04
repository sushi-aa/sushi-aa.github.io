// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ED3665, #3A7BF5, #20E6A1, #D0C915, #DB2AEF, #F09E3F, #F37864",
  firstName: "Arushi",
  middleName: "",
  lastName: "Arora",
  message: " M.S. Computer Science @ UC Irvine ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sushi-aa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100015159272041",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arushiarora2/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/arushicopy.png"),
  imageSize: 300,
  message:
    "Hi! My name is Arushi Arora. I graduated from the University of California, Irvine (UCI) with a B.S. in Computer Science & Engineering, and recently began my M.S. in CS at UCI. My main areas of interest are machine learning, artificial intelligence, algorithms, and cloud computing. Aside from CS, I enjoy playing piano, singing, figure skating, and reading. ",
  resume: "",
};


const repos = {
  show: true,
  heading: "[Github] Projects",
  gitHubUsername: "sushi-aa", 
  reposLength: 0,
  specificRepos: ["buzzr", "ismug", "kaggle-work", "hw2vec", "tensorflow-developer-certificate", "ToDoList"],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85 },
    { name: "Python", value: 90 },
    { name: "C++", value: 75 },
    { name: "VHDL", value: 80 },
    { name: "Verilog", value: 80 },
    { name: "HTML/CSS", value: 83 },
    { name: "Javascript", value: 75 },
    { name: "RISC-V/MIPS", value: 75 },
    { name: "Go", value: 60 },
    { name: "Scala", value: 60 },
    { name: "Tensorflow", value: 65}
  ],
  softSkills: [
    { name: "Determination", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Leadership", value: 80 },
    { name: "Adaptability", value: 90 },
    { name: "Creativity", value: 75 },
    { name: "Communication", value: 95 },
  ],
  otherSkills: [
    {name: "Piano", value: 95 },
    {name: "Voice", value: 95},
    {name: "Figure Skating", value: 70},
    {name: "Swimming", value: 70},
  ],
  languageSkills: [
    {name: "English", value: 100},
    {name: "Spanish", value: 75},
    {name: "Hindi", value: 90},
    {name: "Mandarin", value: 25}
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "Feel free to reach out through my social media above or email me at arushia2@uci.edu",
};


const currently = {
  show: true,
  heading: "Currently",
  data: [
    {
      month: "December",
      year: "2023",
      description: "• First quarter of grad school complete!",
      description2: "• Worked on a project/paper about model compression techniques on BERT-like models",
      description3: ""
    },,
    {
      month: "September",
      year: "2023",
      description: "• Completed a course on improving deep neural networks through hyperparameter tuning, optimization, and regularization.",
      description2: "• Moving in and starting my first quarter of graduate school!",
      description3: ""
    },
    {
      month: "August",
      year: "2023",
      description: "• Completed DeepLearning.AI's Tensorflow Professional Developer Specialization!",
      description2: "• Making my way through the novel 𝘚𝘪𝘹 𝘰𝘧 𝘊𝘳𝘰𝘸𝘴 and trying to make some music.",
      description3: "• Working on a Kaggle exercise that uses NLP to predict whether disaster tweets are real or fake."
    },
    {
      month: "July",
      year: "2023",
      description: "• Working on a Kaggle exercise to generate Monet-style art from a photograph using a Generative Adversarial Network (GAN).",
      description2: "• Beginning a course, offered by DeepLearning.AI through Coursera, on Tensorflow development.",
      description3: ""
    },
    {
      month: "June",
      year: "2023",
      description: "• UCI Commencement Ceremony!",
      description2: "",
      description3: ""
    },
    {
      month: "March",
      year: "2023",
      description: "• Traveled to Canada to present a research paper at SIGCSE '23",
      description2: "• Officially completed my B.S. in Computer Science & Engineering at UCI!",
      description3: ""
    },
    {
      month: "December",
      year: "2022",
      description: "• Fall quarter is over. One more quarter left until I graduate!",
      description2: "• Re-learning various pieces from my piano repertoire over winter break.",
      description3: ""
    },
    {
      month: "September",
      year: "2022",
      description: "• Successfully completed my summer SDE internship at Amazon!",
      description2: "• The start of my last year as an undergraduate.",
      description3: ""
    },
  ]
};

const experiences = {
  show: true,
  heading: "[CS] Experience",
  data: [
    {
      role: 'Undergraduate Research Assistant',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'March 2021 – PRESENT',
    },
    {
      role: 'Undergraduate Reader',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'March 2022 – March 2023',
    },
    {
      role: 'Software Development Engineering Intern',
      companylogo: require('../assets/img/amazon.png'),
      date: 'June 2022 – September 2022',
    },
    {
      role: 'Software Engineering Intern',
      companylogo: require('../assets/img/netapp.jpg'),
      date: 'June 2021 – September 2021',
    },
    {
      role: 'Online Private Lesson Instructor',
      companylogo: require('../assets/img/idtech.jpg'),
      date: 'June 2020 – June 2021',
    },
    {
      role: 'Software & Data Engineering Intern',
      companylogo: require('../assets/img/epidata.jpg'),
      date: 'February 2021 – May 2021',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences, currently };
