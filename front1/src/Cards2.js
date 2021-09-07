import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { deleteUserSagaAC } from "./Redux/ActionCreators";

function Cards2({el}) {
  const dispatch = useDispatch();

 

  const deleteUser = (id) => {
    dispatch(deleteUserSagaAC(id));
  };

  return (
    <div className="card2" style={{color:'black'}}>
      <div>{el.name}</div>
      <h6>{el.email}</h6>
      <p>{el.comment}</p>
      <button
        onClick={() => deleteUser(el._id)}
        type="button"
        className="btn btn-warning"
      >
        Удалить
      </button>
    </div>
 
  );
}

export default Cards2;
