import Cards from "./Cards";
import "./App.css";
import Form from "./Form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initUserSagaAC } from "./Redux/ActionCreators";
import Cards2 from "./Cards2";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);

  const initUser = () => {
    dispatch(initUserSagaAC());
  };

  useEffect(() => {
    initUser();
  }, []);

  return (
    <div className="App">
      <div className="AppDiv">
        <h2 className="all">HoneyHunters</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlw8uOeSbGsc-yGX0A0PVEFtqFmZR2V9gfg&usqp=CAU"
          alt="конверт"
        />
      </div>
      <Form />
      <div className="cardDiv">
        {users.length ? (
          users.map((el, index) => {
            if (index % 2) return <Cards2 key={el._id} el={el} />;
            else return <Cards key={el._id} el={el} />;
          })
        ) : (
          <div style={{ color: "yellow" }}>База данных пуста!</div>
        )}
      </div>
    </div>
  );
}

export default App;
