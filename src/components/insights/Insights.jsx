import { useAppContext } from "../../context/AppContext";
import {
  FaLightbulb,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

const Insights = () => {
  const { transactions } = useAppContext();

  const [selectedMonth, setSelectedMonth] = useState(
    new Date().getMonth()
  );

  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  // Get available years dynamically
  const years = [
    ...new Set(transactions.map((t) =>
      new Date(t.date).getFullYear()
    )),
  ];

  if (!transactions.length) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          Insights
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          No insights available
        </p>
      </div>
    );
  }

  const monthData = transactions.filter((t) => {
    const date = new Date(t.date);

    return (
      date.getMonth() === selectedMonth &&
      date.getFullYear() === selectedYear
    );
  });

  // Income / Expense
  const monthlyIncome = monthData
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const monthlyExpense = monthData
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const net = monthlyIncome - monthlyExpense;

  // Highest category
  const categoryMap = {};

  monthData.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  // Monthly comparison (current vs previous month SAME YEAR)
  const currentMonth = selectedMonth;
  const currentYear = selectedYear;

  let currentTotal = 0;
  let previousTotal = 0;

  transactions.forEach((t) => {
    const date = new Date(t.date);

    if (t.type === "expense") {
      if (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        currentTotal += t.amount;
      } else if (
        date.getMonth() === currentMonth - 1 &&
        date.getFullYear() === currentYear
      ) {
        previousTotal += t.amount;
      }
    }
  });

  const diff = currentTotal - previousTotal;
  const isIncrease = diff > 0;

  const percentage =
    previousTotal === 0
      ? null
      : ((diff / previousTotal) * 100).toFixed(1);

  const TrendIcon = isIncrease ? FaArrowUp : FaArrowDown;
  const trendColor = isIncrease ? "text-red-600" : "text-green-600";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-5">
        
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          Insights
        </h2>

        <div className="flex gap-2">
          
          {/* Year */}
          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(Number(e.target.value))
            }
            className="border rounded-lg px-3 py-1.5 text-sm"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          {/* Month */}
          <select
            value={selectedMonth}
            onChange={(e) =>
              setSelectedMonth(Number(e.target.value))
            }
            className="border rounded-lg px-3 py-1.5 text-sm"
          >
            {months.map((m, i) => (
              <option key={i} value={i}>
                {m}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        <div className="p-4 rounded-xl bg-green-50">
          <p className="text-xs text-gray-500">Income</p>
          <h3 className="text-lg font-semibold text-green-600 mt-1">
            {formatCurrency(monthlyIncome)}
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-red-50">
          <p className="text-xs text-gray-500">Expense</p>
          <h3 className="text-lg font-semibold text-red-600 mt-1">
            {formatCurrency(monthlyExpense)}
          </h3>
        </div>

        <div className="p-4 rounded-xl bg-blue-50">
          <p className="text-xs text-gray-500">Net Balance</p>
          <h3 className="text-lg font-semibold text-blue-600 mt-1">
            {formatCurrency(net)}
          </h3>
        </div>

      </div>

      {/* Highest */}
      {highest && (
        <div className="mb-4 text-sm text-gray-600">
          Highest spending:
          <span className="font-semibold text-gray-800 ml-1">
            {highest[0]}
          </span>
          <span className="text-gray-500 ml-1">
            ({formatCurrency(highest[1])})
          </span>
        </div>
      )}

      {/* Change */}
      <div className="flex justify-between items-center text-sm border-t pt-4">
        
        <div className="flex items-center gap-2">
          <TrendIcon className={trendColor} />
          <span className="text-gray-500">Monthly Change:</span>
          <span className={`font-semibold ${trendColor}`}>
            {isIncrease ? "+" : ""}
            {formatCurrency(diff)}
          </span>
        </div>

        <div className={`font-semibold ${trendColor}`}>
          {percentage === null
            ? "Change: N/A"
            : `Change: ${isIncrease ? "+" : ""}${percentage}%`}
        </div>

      </div>

    </div>
  );
};

export default Insights;