import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        let addNum = count + 1;
        setCount(addNum);
    }

    const handleSub = () => {
        let subNum = count - 1;
        setCount(subNum);
    }

    const counterStyle = {
        border: "2px solid yellow"
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
        </div>
    )
}