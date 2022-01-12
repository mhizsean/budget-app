import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SpentItem from "./SpentItem";

const SpentList = () => {
  const { expenses } = useContext(AppContext); //destructure to get expenses from contxt
  return (
    <>
      <ul className="list-group">
        {expenses.map((expense) => (
          <SpentItem id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </>
  );
};

export default SpentList;
