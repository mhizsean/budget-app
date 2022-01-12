import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SpentTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-secondary">
      <span>Spent: £{totalExpenses}</span>
    </div>
  );
};

export default SpentTotal;
