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
  message: " Software Engineer @ Google ",
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
    "Hi! My name is Arushi Arora. I graduated from the University of California, Irvine (UCI) with a B.S. in Computer Science & Engineering and an M.S. in Computer Science. I recently began working as a software engineer at Google after working at Amazon for just over a year. My main areas of interest are machine learning, artificial intelligence, and algorithms. Beyond computer science, I’m a lifelong pianist who also enjoys singing, golf, and figure skating. ",
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
    { name: "HTML/CSS", value: 80 },
    { name: "Javascript", value: 75 },
    { name: "RISC-V/MIPS", value: 70 },
    { name: "Go", value: 70 },
    { name: "Scala", value: 60 },
    { name: "Tensorflow", value: 65}
  ],
  softSkills: [
    { name: "Determination", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Leadership", value: 80 },
    { name: "Adaptability", value: 95 },
    { name: "Creativity", value: 75 },
    { name: "Communication", value: 95 },
  ],
  otherSkills: [
    {name: "Piano", value: 95 },
    {name: "Voice", value: 95},
    {name: "Figure Skating", value: 70},
    {name: "Swimming", value: 70},
    {name: "Golf", value: 50},
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
      month: "February",
      year: "2026",
      description: "• Parted ways with my wonderful team at Amazon to join Google, and excited for what's ahead!",
      description2: "• Went back to visit Irvine for the first time since graduating",
      description3: ""
    },
    {
      month: "December",
      year: "2025",
      description: "• Successfully helped launch color writing features for the new <a href='https://www.amazon.com/Amazon-Kindle-Scribe-Colorsoft/dp/B0DWRBVDN6' target='_blank'>Kindle Scribe Colorsoft</a> :)",
      description2: "• Playing more golf than I ever thought I would...",
      description3: "• A very eventful year comes to an end. Notable trips include Hawaii, Portland, San Diego, Alaska, Wisconsin, Pebble Beach, & Point Reyes!"
    },
    {
      month: "October",
      year: "2025",
      description: "• Took a small trip to Wisconsin (first time) and ate so much cheese",
      description2: "• In the midst of incredibly busy work weeks to get these devices ready for launch...coming soon!",
      description3: ""
    },
    {
      month: "February",
      year: "2025",
      description: "• Happy to be joining Kindle @ Amazon Lab126 as a full-time software engineer!",
      description2: "• Playing some Rachmaninoff, Schubert, and Chopin in resumed piano classes with my amazing teacher <a href='https://arts4all.org/music-school/private-music-lessons/faculty/temirzhan-yerzhanov/' target='_blank'>Temirzhan</a>",
      description3: ""
    },
    {
      month: "December",
      year: "2024",
      description: "• My last quarter of grad school :)",
      description2: "• Two new research papers on arXiv (<a href='https://arxiv.org/abs/2411.14655' target='_blank'>concept inventory</a> and <a href='https://arxiv.org/abs/2411.18790' target='_blank'>schulze voting</a>)",
      description3: "• Getting back into music with an opera class and performance!"
    },
    {
      month: "June",
      year: "2024",
      description: "• All done with my first year of grad school. Set to graduate in December 2024!",
      description2: "• Working on 2 research projects with paper deadlines this summer...stay tuned!",
      description3: "• Began my SDE internship at Amazon, back on <a href='https://www.goodreads.com/' target='_blank'>my team</a> from 2 summers ago."
    },
    {
      month: "December",
      year: "2023",
      description: "• First quarter of grad school complete!",
      description2: "• Worked on a project/paper about model compression techniques on BERT-like models",
      description3: ""
    },
    {
      month: "September",
      year: "2023",
      description: "• Completed a course (<a href='https://www.coursera.org/account/accomplishments/certificate/PD8PJXRW5QQP?trk=public_profile_see-credential' target='_blank'>credential</a>) on improving deep neural networks through hyperparameter tuning, optimization, and regularization.",
      description2: "• Moving in and starting my first quarter of graduate school!",
      description3: ""
    },
    {
      month: "August",
      year: "2023",
      description: "• Completed DeepLearning.AI's Tensorflow Professional Developer Specialization! (<a href='https://www.coursera.org/account/accomplishments/specialization/certificate/XWTHT7M8VMF8?trk=public_profile_see-credential' target='_blank'>credential</a>)",
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
      description: "• Traveled to Canada to present <a href='https://dl.acm.org/doi/10.1145/3545945.3569820' target='_blank'>my research paper</a> at SIGCSE '23",
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
  heading: "Experience",
  data: [
    {
      role: 'Software Development Engineer',
      companylogo: require('../assets/img/google.png'),
      date: 'February 2026 – PRESENT',
    },
    {
      role: 'Software Development Engineer',
      companylogo: require('../assets/img/amazon.png'),
      date: 'February 2025 – PRESENT',
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'March 2021 – December 2024',
    },
    {
      role: 'Software Development Engineering Intern',
      companylogo: require('../assets/img/amazon.png'),
      date: 'June 2024 – September 2024',
    },
    {
      role: 'Teaching Assistant',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'September 2023 – December 2024',
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
    // {
    //   role: 'Software & Data Engineering Intern',
    //   companylogo: require('../assets/img/epidata.jpg'),
    //   date: 'February 2021 – May 2021',
    // },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences, currently };
