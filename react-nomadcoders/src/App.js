import { useState, useEffect } from "react";

function App() {
    const [showing, setShowing] = useState(0);

    function onClick() {
        setShowing((prev) => !prev);
    }

    function Hello() {
        useEffect(() => {
            console.log("hi");

            return () => {
                console.log("bye")
            }
        }, []);

        return (
            <h1>
                Hello
            </h1>
        )
    }

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>
                {showing ? "Hide" : "Show"}
            </button>
        </div>
    );
}

export default App;