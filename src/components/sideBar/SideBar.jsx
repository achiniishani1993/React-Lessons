import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';


export const SideBar = ({onClose}) => {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-black text-white p-5 z-50">
       <CloseIcon className="mb-5 cursor-pointer" onClick={onClose}/>
       <ul className="space-y-4  text-lg font-semibold no-underline ">
        <li  className="hover:bg-gray-400 transition text-center">
            <Link to="/" onClick={onClose} className="text-white text-xl font-semibold !no-underline ">Home</Link>
        </li>
        <li className="hover:bg-gray-400 transition text-center">
            <Link to="/about" onClick={onClose} className="text-white text-xl font-semibold !no-underline ">About</Link>
        </li>
        <li  className="hover:bg-gray-400 transition text-center">
            <Link to="/portfolio" onClick={onClose} className="text-white text-xl font-semibold !no-underline ">Portfolio</Link>
        </li>
       </ul>
    </div>
  )
}
