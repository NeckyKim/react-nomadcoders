import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    function onClick() {
        setCounter((prev) => prev + 1);
    };

    function onChange(event) {
        setKeyword(event.target.value);
    }

    useEffect(() => {
        console.log("I run only once");
    }, []);

    useEffect(() => {
        console.log("I run when 'keyword' changes");
    }, [keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);

    useEffect(() => {
        console.log("I run when 'keyword' and 'counter' changes");
    }, [keyword, counter]);

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />

            <h1>
                {counter}
            </h1>

            <button onClick={onClick}>
                Click
            </button>
        </div>
    );
}

export default App;