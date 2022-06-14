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
  message: " Computer Science & Engineering @ UC Irvine ",
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

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/arushi.png"),
  imageSize: 300,
  message:
    "My name is Arushi Arora. I’m currently a 4th year Computer Science & Engineering major at UC Irvine. My main areas of interest are machine learning, algorithms, cloud computing, and sustainable engineering. Aside from CS, I enjoy playing piano, singing, and figure skating. ",
  resume: "",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sushi-aa", 
  reposLength: 4,
  specificRepos: [],
};


// Leadership SECTION
const leadership = {
  show: false,
  /*
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/arushi.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/arushi.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }*/
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
    {name: "Voice", value: 90},
    {name: "Figure Skating", value: 70},
    {name: "Swimming", value: 70},
  ],
  languageSkills: [
    {name: "English", value: 98},
    {name: "Spanish", value: 75},
    {name: "Hindi", value: 80},
    {name: "Korean", value: 25}
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "Feel free to reach out through my social media above or email me at arushia2@uci.edu",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineering Intern',
      companylogo: require('../assets/img/amazon.jpg'),
      date: 'June 2022 – PRESENT',
    },
    {
      role: 'Online Private Lesson Instructor',
      companylogo: require('../assets/img/idtech.jpg'),
      date: 'June 2020 – June 2021',
    },
    {
      role: 'Undergraduate Research Assistant',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'March 2022 – PRESENT',
    },
    {
      role: 'Software Engineering Intern',
      companylogo: require('../assets/img/netapp.jpg'),
      date: 'June 2021 – September 2021',
    },
    {
      role: 'Software & Data Engineering Intern',
      companylogo: require('../assets/img/epidata.jpg'),
      date: 'February 2021 – May 2021',
    },
    {
      role: 'Undergraduate Reader',
      companylogo: require('../assets/img/uci.jpg'),
      date: 'March 2022 – PRESENT',
    },
    
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
