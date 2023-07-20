import { useState } from "react";
import Modal from "./alert_box";
import Backdrop from "./Background";

// we will pass props to put different attribute that is in place of TITLE we can put attribute like READ BOOKS, to write etc.
// PROPS is an javascript object. so PROPS has key value pairs which will writeen in App.js
// PROPS is function parameter
// in react parameter is call PROPS
function Todo(props) {  //we can also name function differently

  // intial state is false
  // below represents whether the modal(alert box) should be seen or not.
  // should not be seen at start so we have written false
  // modalIsOpen:- false value is stored in this modalIsOpen
  // modalIsOpen:- useState returns in its array is the current state snapshot..so that why false value is stored.
  // setModalIsOpen:- function allows us to change the value of modalIsOpen, instead we always call setModalIsOpen function to assign the new value of modalIsOpen
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    
    // change the value of modalIsOpen using setModalIsOpen function
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
    return (
        <div className="card">

        {/* to access data of props, we write props.text */}
        {/* to not treat props.text as plain text we write it inside curly braches {} */}
        {/* in curly braces we can write write any block statement that is if...else.. etc, but we can write single line */}
        <h2>{props.text}</h2>
        <div className="actions">
        {/* if we write deleteHandler() in this way then react will exceute firstly, but if we write deleteHandler in this way react will exceute when there is need to be exceute */}
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {/* {modalIsOpen ? <Modal /> : null}
                        or we can write below thing
        as when we write AND operator it will check and return the the thing which is written after AND operator */}

        {/* Own components (Modal, Backdrop) don't know the onClick props as they made by us or not inbuilt by react..so we have to first write it in their components file in function */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    );
}

// to availabe all thing written in this file outside the file
export default Todo;