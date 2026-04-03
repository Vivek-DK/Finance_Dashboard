import { useAppContext } from "../../context/AppContext";

const TransactionFilters = ({ selectedMonth, setSelectedMonth }) => {
  const { filters, setFilters, transactions } = useAppContext();

  // Get unique years dynamically
  const years = [
    ...new Set(transactions.map((t) => new Date(t.date).getFullYear())),
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

      {/* Type */}
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

      {/* Year */}
      <select
        value={filters.year}
        onChange={(e) =>
          setFilters({ ...filters, year: e.target.value })
        }
        className="border rounded-lg px-3 py-2 w-full md:w-1/4"
      >
        <option value="all">All Years</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* Month */}
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
        className="border rounded-lg px-3 py-2 w-full md:w-1/4"
      >
        <option value={-1}>All Months</option>
        {[
          "Jan","Feb","Mar","Apr","May","Jun",
          "Jul","Aug","Sep","Oct","Nov","Dec"
        ].map((m, i) => (
          <option key={i} value={i}>
            {m}
          </option>
        ))}
      </select>

    </div>
  );
};

export default TransactionFilters;