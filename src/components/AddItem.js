import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4,
      name: name,
      const: parseInt(cost) //change cost to integer
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm">
            <label for="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </div>

          <div className="col-sm">
            <label for="name">Cost</label>
            <input
              type="text"
              required
              className="form-control"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              id="cost"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
