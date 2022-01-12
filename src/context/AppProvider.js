import { useReducer } from "react";
import { AppContext } from "./AppContext";
import AppReducer from "./AppReducer";

const initialState = {
  budget: 1000000,
  expenses: [
    { id: 12, name: "travel", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
