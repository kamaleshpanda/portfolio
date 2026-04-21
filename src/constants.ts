import { ProjectType } from "./types/project";
import project1Img from "./assets/project1.png";
import project2Img from "./assets/project 2.png";
import inProgressImg from "./assets/kalm.svg";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Experience", path: "#experience" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: project1Img,
    imgAlt: "Airline Tweet Insights project screenshot",
    number: 1,
    title: "Airline Tweet Insights",
    description:
      "Analyzed Twitter dataset to understand customer sentiment toward U.S. airlines, revealing key trends, common service issues, and overall public perception through interactive dashboards, visualizations, a simulated location map, and a word cloud for positive feedback.",
    demo: "https://airline-sentiment-us.streamlit.app/",
    github: "https://github.com/kamaleshpanda/Airline-Customer-Sentiment-Insights",
    technologies: [
      "Python",
      "Pandas",
      "Plotly",
      "Matplotlib",
      "Streamlit",
      "WordCloud"
    ],
    ariaLabel: {
      demo: "View Airline Tweet Insights live demo",
      github: "View Airline Tweet Insights source code on GitHub"
    }
  },
  {
    imgSrc: project2Img,
    imgAlt: "Fairness in Toxicity Detection project screenshot",
    number: 2,
    title: "Fairness in Toxicity Detection (FPR–FNR Trade-offs)",
    description: "Explored fairness issues in toxicity detection models, focusing on how identity-related terms can lead to biased predictions. Built and compared multiple models, analyzed trade-offs between false positives and false negatives, and applied techniques to reduce bias and improve overall reliability.",
    demo: "https://github.com/kamaleshpanda/FNR-FPR-Bias-Tradeoff",
    github: "https://github.com/kamaleshpanda/FNR-FPR-Bias-Tradeoff",
    technologies: ["Python", "Machine Learning / NLP", "Transformers", "Scikit-learn", "Pandas", "NumPy"],
    ariaLabel: {
      demo: "View project details on GitHub",
      github: "View Fairness in Toxicity Detection source code on GitHub"
    }
  },
  {
    imgSrc: inProgressImg,
    imgAlt: "Project In Progress",
    number: 3,
    title: "In Progress...",
    description: "Currently working on something exciting! This project is in active development and more details will be updated here as soon as it's ready to showcase.",
    demo: "#",
    github: "#",
    technologies: ["Building...", "Debugging..."],
    ariaLabel: {
      demo: "View Demo",
      github: "View GitHub"
    }
  }
];
