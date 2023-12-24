import { useState } from "react";


export default function AddToDo(){
    const[list, setList] = useState([]);
    const[input, setInput] = useState("");

    
    const addItem = (toDo) => {
        const newToDo ={
            id : Math.random(),
            toDo : toDo,
        };
        setList([...list, newToDo]);

        setInput("");
    };

    const deleteToDo = (id) => {
        const newList = list.filter((toDo) => toDo.id !== id);

        setList(newList);
    }

    
    
    return(
        <div className = "to-do">
            <h1> TO Do</h1>
            <li>
                <input type = "text" placeholder = "Add a to-do" value={input} onChange={(e) => setInput(e.target.value)}/>
            </li>
            <button onClick={() => addItem(input)}>Add</button>
            <ul>
                {list.map((toDo) => (
                    <li key = {toDo.id}>
                        {toDo.toDo}
                        <button onClick = {() => deleteToDo(toDo.id)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>


    );

}