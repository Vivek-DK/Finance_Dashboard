import { useAppContext } from "../../context/AppContext";
import { FaUserShield, FaUser } from "react-icons/fa";

const RoleSwitcher = () => {
  const { role, setRole } = useAppContext();

  return (
    <div className="flex items-center gap-2">
      
      {/* Role Icon */} 
      <div
        className={`p-2 rounded-lg ${
          role === "admin"
            ? "bg-blue-100 text-blue-600"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {role === "admin" ? <FaUserShield /> : <FaUser />}
      </div>

      {/* Dropdown */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

    </div>
  );
};

export default RoleSwitcher;