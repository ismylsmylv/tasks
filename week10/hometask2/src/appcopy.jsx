import React, { useReducer, useState } from 'react';

function todoReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.value];

        default:
            return state;
    }
}

function App() {
    const [input, setInput] = useState('');
    const [list, dispatch] = useReducer(todoReducer, []);

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                value={input}
                placeholder="todo"
            />
            <button
                onClick={() => {
                    setInput('');
                    dispatch({ type: 'add', value: input });
                }}
            >
                add
            </button>
            <ul>
                {list.map((elem, index) => (
                    <li key={index}>{elem}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
