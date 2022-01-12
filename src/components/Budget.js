import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext); //destructure to get budget from contxt
  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
    </div>
  );
};

export default Budget;
