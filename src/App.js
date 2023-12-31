import "./App.css";
import "./Square";
import Square from "./Square";

function App() {
    return (
        <div className="main-con">
            <div className="gap">
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
            <div className="gap">
                <Square value="4" />
                <Square value="5" />
                <Square value="6" />
            </div>
            <div className="gap">
                <Square value="7" />
                <Square value="8" />
                <Square value="9" />
            </div>
        </div>
    );
}

export default App;
