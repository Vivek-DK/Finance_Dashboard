import { formatCurrency, formatDate } from "../../utils/helpers";

const TransactionRow = ({ transaction }) => {
  const { date, category, type, amount } = transaction;

  return (
    <tr className="border-b last:border-none hover:bg-gray-50 transition">
      
      {/* Date */}
      <td className="py-3 px-2 text-gray-500 text-sm">
        {formatDate(date)}
      </td>

      {/* Category */}
      <td className="px-2 font-medium text-gray-800">
        {category}
      </td>

      {/* Type */}
      <td className="px-2">
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            type === "income"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {type}
        </span>
      </td>

      {/* Amount */}
      <td className="text-right px-2 font-semibold text-gray-900">
        {formatCurrency(amount)}
      </td>

    </tr>
  );
};

export default TransactionRow;