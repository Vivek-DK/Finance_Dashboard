// src/components/transactions/TransactionRow.jsx

import { formatCurrency, formatDate  } from "../../utils/helpers";

const TransactionRow = ({ transaction }) => {
  const { date, category, type, amount } = transaction;

  return (
    <tr className="border-b last:border-none hover:bg-gray-50">
      
      <td className="py-2">{formatDate(date)}</td>

      <td>{category}</td>

      <td>
        <span
          className={`px-2 py-1 rounded text-xs ${
            type === "income"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {type}
        </span>
      </td>

      <td className="text-right font-medium">
        {formatCurrency(amount)}
      </td>

    </tr>
  );
};

export default TransactionRow;