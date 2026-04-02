// src/components/common/Navbar.jsx

import RoleSwitcher from "./RoleSwitcher";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      
      <div className="flex items-center gap-3">
        
        {/* Icon */}
        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
          <FaChartLine />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Finance Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Track and manage your finances
          </p>
        </div>

      </div>

      <div className="flex items-center gap-3">
        <RoleSwitcher />
      </div>

    </div>
  );
};

export default Navbar;