import "bootstrap/dist/css/bootstrap.min.css";
import AddItemForm from "./components/AddItem";
import Balance from "./components/Balance";
import Budget from "./components/Budget";
import SpentTotal from "./components/Spent";
import SpentList from "./components/SpentList";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Balance />
          </div>
          <div className="col-sm">
            <SpentTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <SpentList />
          </div>
        </div>
        <h3 className="mt-3">Add </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddItemForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
