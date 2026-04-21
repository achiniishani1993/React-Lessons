function Projects({
  name,
  screenshot,
  Github,
  Tech,
  background,
  purpose,
  skills,
  role,
  challenges,
}) {
  return (
    <div>
      <h2>My Pervious Projects</h2>
      <p>
        I have selected three projects that I have completed so far. These
        projects showcase my skills and demonstrate how I have continued to
        learn and improve over time.
      </p>
      <div>
        <div>
          <h3>Name of the project{name}</h3>
          <img src={screenshot} alt="project UI" />
        </div>
        <div>
          <p>
            <span>Tech Used:</span> {Tech}
          </p>
          <p>
            <span>Overview:</span> {background}
          </p>
          <p>
            <span>Project purpose:</span> {purpose}
          </p>
          <p>
            <span>Skills gained:</span> {skills}
          </p>
          <p>
            <span>Project Role:</span> {role}
          </p>
          <p>
            <span>Challenges:</span> {challenges}
          </p>

          <a href={Github} target="_blank">
            View GitHub Repo:
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
