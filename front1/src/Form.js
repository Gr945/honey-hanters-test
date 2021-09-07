import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import {addUserSagaAC} from './Redux/ActionCreators'

function Form(props) {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();

  const addUser = (e) => {
const {name, email, comment} = e
    dispatch(addUserSagaAC(name, email, comment));
  };
  return (
    <div className='animate__animated animate__lightSpeedInRight'>
      <form className="form" onSubmit={handleSubmit(addUser)}>
        <div className="superDiv">
          <div className="oneDiv">
            <label htmlFor="formGroupExampleInput" className="form-label all">
              Имя
            </label>
            <input
              {...register("name")}
              name="name"
              type="text"
              className="form-control all"
              id="formGroupExampleInput"
              required
            />
            <label
              htmlFor="formGroupExampleInput"
              className="form-label all"
              style={{ marginTop: "100px" }}
            >
              Е-Mail
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              className="form-control all"
              id="formGroupExampleInput"
              required
            />
          </div>
          <div className="oneDiv">
            <label className="form-label all">Комментарий</label>
            <textarea 
            {...register('comment')}
            name="comment" className="form-control all texarea" />
          </div>
        </div>
        <div className="buttonDiv">
          <button type="submit" className="btn btn-danger button">
            Записать
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
