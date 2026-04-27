
export const PopupWindow = ({name, tech, overview, role, contribution, onClick
    }) => {
  return (
    <div className = "shadow-xl/30 p-8 font-serif" >
        <h1>{name}</h1>
        <p>{role}</p>
        <p><strong>Overview of the project: </strong>{overview}</p>
        <p><strong>Contributions:</strong>  {contribution}</p>
        <p> <strong>Used Technologies:</strong> {tech}</p>

        <button onClick = {onClick} className="px-3 py-2 bg-[#2b4a46] text-white !rounded-lg shadow-md hover:opacity-90 transition">Close Project</button>
    </div>
  )
}
