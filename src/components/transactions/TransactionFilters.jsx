// src/components/transactions/TransactionFilters.jsx

import { useAppContext } from "../../context/AppContext";

const TransactionFilters = ({ selectedMonth, setSelectedMonth }) => {
  const { filters, setFilters } = useAppContext();

  const months = [
    "All",
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search category..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
        className="border rounded-lg px-3 py-2 w-full md:w-1/3"
      />

      {/* Type Filter */}
      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
        className="border rounded-lg px-3 py-2 w-full md:w-1/4"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Month Filter */}
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
        className="border rounded-lg px-3 py-2 w-full md:w-1/4"
      >
        {months.map((m, i) => (
          <option key={i} value={i - 1}>
            {m}
          </option>
        ))}
      </select>

    </div>
  );
};

export default TransactionFilters;