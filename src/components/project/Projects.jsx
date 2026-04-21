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
    <div className="flex justify-center">
      <div className="flex gap-6 bg-black p-6 rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.5)]">
        <div className="w-50" >
          <h3 className="text-center mb-2">{name}</h3>
          <img src={screenshot} alt="project UI" className="w-full  object-cover rounded-md" />
        </div>
        <div className="w-50 space-y-2 ">
          <p>
            <span className="font-semibold">Tech Used :</span> {Tech}
          </p>
          <p>
            <span className="font-semibold" >Overview :</span> {background}
          </p>
          <p>
            <span className="font-semibold" >Project purpose :</span> {purpose}
          </p>
          <p>
            <span className="font-semibold" >Skills :</span> {skills}
          </p>
          <p>
            <span className="font-semibold" >Project Role :</span> {role}
          </p>
          <p>
            <span className="font-semibold" >Challenges :</span> {challenges}
          </p>

          <a href={Github} target="_blank" className="text-blue-400 !no-underline">
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
