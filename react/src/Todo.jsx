import React, { useState } from "react";

const App=()=>{
    const[input,setInput]=useState("");
    const[todo,setTodo]=useState([]);

    const addTodo=()=>{
        setTodo([...todo,
            {id:Date.now(),text:input,completed:false}
        ]);
        setInput("");
    }

    //delete
    const deletetodo=(id)=>{
        setTodo(todo.filter((todo)=> todo.id !== id));
    }

    //complete
    const toggleComplete=(id)=>{
        setTodo(todo.map((todo)=>
            todo.id===id ? {
                ...todo,completed: !todo.completed 
            }
            : todo
        
        ))
    }
    return (
    <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        
        {todo.map(t => (
            <div key={t.id}>
                <span style={{textDecoration: t.completed ? "line-through" : "none"}}>
                    {t.text}
                </span>
                <button onClick={() => toggleComplete(t.id)}>✓</button>
                <button onClick={() => deletetodo(t.id)}>✕</button>
            </div>
        ))}
    </div>
)

}
export default App;
