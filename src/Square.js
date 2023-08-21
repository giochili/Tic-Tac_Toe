import "./Square.css";

function Square(props) {
    function handleClick() {
        console.log("clicked!");
    }
    return (
        <button className="Square" onClick={handleClick}>
            {props.value}
        </button>
    );
}
export default Square;
