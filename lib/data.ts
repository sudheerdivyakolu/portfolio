import React from "react";
import { CgWorkAlt } from "react-icons/cg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Assistant",
    location: "University of Houston, Texas",
    description:
      "Lead technical troubleshooting and resolving issues related to exam software and equipment minimizing disruptions and ensuring a seamless testing process for over 500 students per semester.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Machine learning intern",
    location: "Indian Servers",
    description:
      "Took initiative to manage a multidisciplinary team to implement a project Drowsiness Detection System, leveraged state-of-the-art deep learning models, such as Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs), to analyze facial expressions and monitor eyelid movements in real-time. ",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 - Sep 2020",
  }
] as const;

export const projectsData = [
  {
    title: "Weather Forecast App",
    description:
      "Developed a sleek Weather Forecast App in Swift, providing real-time updates for the current location. Features include a user-friendly interface, global location search, saved locations, and dynamic weather notifications. Proficient in Swift, I led the end-to-end development, ensuring a seamless and responsive user experience. ",
    tags: ["Swift", "Xcode"],
    icons: [
      "logos:swift",
      "logos:xcode"
    ],
    // imageUrl: cryptoCrowdImg,
    // githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    // demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "Affective Driving Analysis Project",
    description:
      "Implemented Multiple Linear Regression Modeling in R to analyze factors influencing heart rate during driving. Conducted exploratory analysis through comprehensive summary visualizations, providing insights into trip-level distributions across various variables. Utilized geospatial data to visualize participant distributions in Texas, contributing to affective driving research through proactive teamwork and clear communication of project goals and progress, and effective presentation. ",
    tags: ["R"],
    icons: [
      "mdi:language-r"
    ],
    // imageUrl: ozdevsImg,
    // urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    // githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Image Enhancement using Neural Networks",
    description:
      "Spearheaded the implementation of advanced deep learning-based image enhancement techniques (SRGAN, ESRGAN, Real- ESRGAN) using Python in Google Colab, showcasing transformative potential for diagnostic image quality by leveraging key libraries and frameworks such as OpenCV, TensorFlow, PyTorch, Matplotlib.",
    tags: ["Python", "PyTorch"],
    icons: [
      "logos:python",
      "logos:pytorch",
      "logos:opencv",
      "logos:tensorflow",
      "logos:matplotlib"
    ],
    // imageUrl: assetTradingImg,
    // githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  }
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "C",
    icon: "logos:c",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "R",
    icon: "mdi:language-r",
  },
  {
    name: "Swift",
    icon: "logos:swift",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Pandas",
    icon: "logos:pandas",
  },
  {
    name: "Numpy",
    icon: "logos:numpy",
  },
  {
    name: "Pytorch",
    icon: "logos:pytorch",
  },
  {
    name: "Matplotlib",
    icon: "logos:matplotlib",
  },
  {
    name: "Tensorflow",
    icon: "logos:tensorflow",
  },
  {
    name: "Tableau",
    icon: "logos:tableau",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "Javascript",
    icon: "logos:javascript",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  }
] as const;
