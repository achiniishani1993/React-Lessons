import React, { useState } from "react";
import Projects from "../components/projects/Projects";
import ProjectOne from "../assets/project1.png";
import ProjectTwo from "../assets/project2.png";
import ProjectThree from "../assets/project3.png";
import { Title } from "@mui/icons-material";
import {PopupWindow} from "../components/popUp/PopupWindow"

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const [popupInfo, setPopupInfo] = useState({
    name: "FFIEC CAT — CRI project ",
    tech: "React, JavaScript, PrimeReact, CSS, Git",
    overview:
      "A responsive web application for FFIEC Cybersecurity Assessment Tool (CAT) compliance allows banks to evaluate inherent risk and compute the Cyber Risk Index (CRI)",
    role: "Freelancer-Collaboration project",
    contribution:
      " Improved the usability of Login and Registration pages with an updated password policy, a password strength meter, and a dynamic multi-step registration process. Implemented form validations for data integrity and security while managing version control and collaboration through Git. ",
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-serif">
      <div className="m-5 flex flex-col gap-8">
        <h2 className="!text-[20px] semi-bold">EXAMPLES OF MY WORK</h2>
        <p className="text-center">
          I have selected three projects that I have completed so far. These
          projects showcase my skills and demonstrate how I have continued to
          learn and improve over time.
        </p>

        <button
          onClick={() => setShow(!show)}
          className="wd-36 py-2 bg-[#2b4a46] text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          {show ? "Hide Projects" : "View Projects"}
        </button>

        {show && (
          <>
            <Projects
              name="Cafe-nora"
              screenshot={ProjectOne}
              Tech="HTML, CSS, Figma, Embedded Google Maps, Font Awesome icons"
              background="The project focuses on building a structured and visually appealing multi-page website through collaboration, with each team member contributing to the design and development process."
              purpose="This project is developed for a café and consists of three pages. It allows users to contact the restaurant through a form and also includes a pop-up form for table reservations."
              skills="Communication, working with git branch, familiar with pull request, work with Jira"
              role="Group project - Home.page, gallery.page"
              challenges="Balancing smooth animations and visual effects without overwhelming users."
              Github="https://github.com/achiniishani1993/cafe-nora.git"
            />

            <Projects
              name="Sky-Sprinter"
              screenshot={ProjectThree}
              Tech="JavaScript, HTML, Bootstrap, CSS"
              background="A browser-based arcade game inspired by Flappy Bird, where the player controls a character navigating through moving obstacles while avoiding collisions."
              purpose="The goal of this project was to practice core JavaScript concepts by building an interactive game with real-time animations, collision detection, and score tracking."
              skills="DOM manipulation, event handling, game loop logic, collision detection, animation using requestAnimationFrame, and managing game state."
              role="Solo project"
              challenges="Implementing smooth gravity and jump mechanics, detecting accurate collisions between elements, managing continuous animations, and ensuring consistent game performance across different screen sizes."
              Github="https://github.com/achiniishani1993/Sky-Sprinter"
            />

            <Projects
              name="Facebook-Clone"
              screenshot={ProjectTwo}
              Tech="React, TypeScript, CSS, Font Awesome icons, Material UI Icons"
              background="A modern Facebook-inspired UI clone built with React and TypeScript, featuring a dynamic feed, navigation bar, side panels, chat interface, and interactive components."
              purpose="This project focuses on recreating the core layout and user experience of Facebook using clean component-based architecture."
              skills="React component structure, TypeScript usage, managing state, building reusable UI components, and creating responsive layouts."
              role="Solo project"
              challenges="Structuring multiple components, working with TypeScript types, and replicating a complex social media layout."
              Github="https://github.com/achiniishani1993/Facebook-clone"
            />
          </>
        )}
      </div>

      <div>
        <button onClick={() => setIsOpen(true)} >Open Project</button>

        {isOpen && (
          <PopupWindow name = {popupInfo.name} tech = {popupInfo.tech} overview = {popupInfo.overview} role = {popupInfo.role} contribution = {popupInfo.contribution}/>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
