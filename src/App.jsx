import Projects from "./components/project/Projects";
import ProjectOne from "./assets/project1.png";

const App = () => {
  return (
    <div className=" bg-black text-white font-serif">
       <h1 className="text-center font-bold !text-[50px] p-4" >My Portfolio</h1>
      <div className="m-5 flex flex-col gap-8">
      <h2 className="text-[20px]">My Pervious Projects</h2>
       <p>
        I have selected three projects that I have completed so far. These
        projects showcase my skills and demonstrate how I have continued to
        learn and improve over time.
      </p>
      <Projects
        name="Cafe-nora"
        screenshot={ProjectOne}
        Tech=" HTML, CSS, Embedded Google Maps, Font Awesome icons"
        background="The project focuses on building a structured and visually appealing multi-page website through collaboration, with each team member contributing to the design and development process."
        purpose="This project is developed for a café and consists of three pages. It allows users to contact the restaurant through a form and also includes a pop-up form for table reservations."
        skills="Communication, working with git branch , familiar with pull request, work with Jira"
        role="Group project- Home.page , gallery.page"
        challenges="Balancing smooth animations and visual effects without overwhelming users."
        Github="https://github.com/achiniishani1993/cafe-nora.git"
      />

 <Projects
        name="Cafe-nora"
        screenshot={ProjectOne}
        Tech=" HTML, CSS, Embedded Google Maps, Font Awesome icons"
        background="The project focuses on building a structured and visually appealing multi-page website through collaboration, with each team member contributing to the design and development process."
        purpose="This project is developed for a café and consists of three pages. It allows users to contact the restaurant through a form and also includes a pop-up form for table reservations."
        skills="Communication, working with git branch , familiar with pull request, work with Jira"
        role="Group project- Home.page , gallery.page"
        challenges="Balancing smooth animations and visual effects without overwhelming users."
        Github="https://github.com/achiniishani1993/cafe-nora.git"
      />
       <Projects
        name="Cafe-nora"
        screenshot={ProjectOne}
        Tech=" HTML, CSS, Embedded Google Maps, Font Awesome icons"
        background="The project focuses on building a structured and visually appealing multi-page website through collaboration, with each team member contributing to the design and development process."
        purpose="This project is developed for a café and consists of three pages. It allows users to contact the restaurant through a form and also includes a pop-up form for table reservations."
        skills="Communication, working with git branch , familiar with pull request, work with Jira"
        role="Group project- Home.page , gallery.page"
        challenges="Balancing smooth animations and visual effects without overwhelming users."
        Github="https://github.com/achiniishani1993/cafe-nora.git"
      />


      </div>
     
     
      
    </div>
  );
};

export default App;
