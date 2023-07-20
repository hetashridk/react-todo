// this will get us the alert box for the deleting
// we can aslo name file as Modal
function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }
    return(
        <div className="modal">
            <p>Are you sure ?</p>

            {/* as button is inbuilt components so we used onClick props */}
            <button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}
export default Modal;