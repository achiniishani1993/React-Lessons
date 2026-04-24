import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import TaskIcon from "@mui/icons-material/Task";

export const SideBar = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-black text-white p-5 z-50 ">
      <CloseIcon className="mb-5 cursor-pointer" onClick={onClose} />
      <ul className="space-y-4 text-lg font-semibold ">
        <li className="hover:bg-gray-400 transition flex items-center gap-3 px-1 py-2 rounded">
          <HomeIcon />
          <Link
            to="/"
            onClick={onClose}
            className="text-white text-xl font-semibold !no-underline"
          >
            Home
          </Link>
        </li>

        <li className="hover:bg-gray-400 transition flex items-center gap-3 px-1 py-2 rounded">
          <InfoIcon />
          <Link
            to="/about"
            onClick={onClose}
            className="text-white text-xl font-semibold !no-underline"
          >
            About
          </Link>
        </li>

        <li className="hover:bg-gray-400 transition flex items-center gap-1 px-1 py-3 rounded">
          <TaskIcon />
          <Link
            to="/portfolio"
            onClick={onClose}
            className="text-white text-xl font-semibold !no-underline"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
};
