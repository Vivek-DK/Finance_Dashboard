import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";

const SummaryCard = ({ title, amount }) => {
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
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      <div className="flex items-center justify-between">
        
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <div className={`p-2 rounded-lg ${styles.bg} ${styles.text}`}>
          {styles.icon}
        </div>

      </div>

      <h2 className={`text-2xl font-semibold mt-3 ${styles.text}`}>
        {amount}
      </h2>

    </div>
  );
};

export default SummaryCard;