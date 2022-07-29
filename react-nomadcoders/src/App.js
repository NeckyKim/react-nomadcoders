import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    function onChange(event) {
        setToDo(event.target.value);
    };

    function onSubmit(event) {
        event.preventDefault();

        if (toDo === "") {
            return;
        }

        setToDoList((currentArray) => [...currentArray, toDo]);
        setToDo("");
    };



    return (
        <div>
            <h1>My To Do List</h1>
            {toDoList.length}

            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..." />

                <button>
                    Add
                </button>
            </form>

            <hr />

            {toDoList.map((item, index) => 
                <li key={index}>{item}</li>
            )}
        </div>
    );
}

export default App;