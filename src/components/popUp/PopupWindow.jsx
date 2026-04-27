
export const PopupWindow = ({name, tech, overview, role, contribution, onClick
    }) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{role}</p>
        <p>{overview}</p>
        <p>{contribution}</p>
        <p>{tech}</p>

        <button onClick = {onClick}>Close Project</button>
    </div>
  )
}
