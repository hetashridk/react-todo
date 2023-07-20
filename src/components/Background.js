// this will do for backdrop.
function Backdrop(props) {

    // as div is in built components so it has onClick props
    return <div className="backdrop" onClick={props.onCancel }/>;
}

export default Backdrop;