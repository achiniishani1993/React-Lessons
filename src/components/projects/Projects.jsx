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
  <div className="flex justify-center font-serif px-4 py-6">
  <div className="w-full max-w-5xl bg-[#2b4a46] text-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

    <div className="w-full md:w-1/2 p-4">
      
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">
        {name}
      </h3>

      <div className="w-full aspect-video bg-white/10 rounded-lg overflow-hidden flex items-center justify-center h-80">
        <img
          src={screenshot}
          alt="project UI"
          className="w-full h-full object-contain"
        />
      </div>
    </div>


    <div className="w-full md:w-1/2 p-5 sm:p-6 space-y-3">

      <p><span className="font-semibold">Tech Used:</span> {Tech}</p>
      <p><span className="font-semibold">Overview:</span> {background}</p>
      <p><span className="font-semibold">Purpose:</span> {purpose}</p>
      <p><span className="font-semibold">Skills:</span> {skills}</p>
      <p><span className="font-semibold">Role:</span> {role}</p>
      <p><span className="font-semibold">Challenges:</span> {challenges}</p>

      <a
        href={Github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-300  !no-underline hover:text-blue-200 transition font-medium pt-2"
      >
        View GitHub Repository →
      </a>

    </div>
  </div>
</div>
  );
}

export default Projects;