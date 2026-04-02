// src/components/cards/SummaryCard.jsx

import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

/**
 * SummaryCard
 * -----------------------------
 * Displays a single financial metric
 * (e.g., Balance, Income, Expenses)
 */

const SummaryCard = ({ title, amount }) => {
  // color + icon mapping
  const getStyles = () => {
    if (title === "Income") {
      return {
        text: "text-green-600",
        bg: "bg-green-100",
        icon: <FaArrowDown />,
      };
    }
    if (title === "Expenses") {
      return {
        text: "text-red-600",
        bg: "bg-red-100",
        icon: <FaArrowUp />,
      };
    }
    return {
      text: "text-blue-600",
      bg: "bg-blue-100",
      icon: <FaWallet />,
    };
  };

  const styles = getStyles();

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200">
      
      <div className="flex items-center justify-between">
        
        {/* Title */}
        <p className="text-sm text-gray-500">
          {title}
        </p>

        {/* Icon */}
        <div
          className={`p-2 rounded-lg ${styles.bg} ${styles.text}`}
        >
          {styles.icon}
        </div>

      </div>

      {/* Amount */}
      <h2 className={`text-2xl font-semibold mt-3 ${styles.text}`}>
        {amount}
      </h2>

    </div>
  );
};

export default SummaryCard;