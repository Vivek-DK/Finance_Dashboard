// src/components/insights/Insights.jsx

import { useAppContext } from "../../context/AppContext";
import { FaLightbulb } from "react-icons/fa";

const Insights = () => {
  const { transactions } = useAppContext();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      
      <h2 className="text-lg font-semibold mb-3">
        Insights
      </h2>

      {highest ? (
        <div className="text-sm text-gray-600 space-y-2">
          
          <div className="flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" />
            <span>
              Highest spending category:
            </span>
          </div>

          <p>
            <span className="font-semibold text-gray-800">
              {highest[0]}
            </span>{" "}
            — ₹{highest[1]}
          </p>

        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          No insights available
        </p>
      )}

    </div>
  );
};

export default Insights;