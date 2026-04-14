import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setRuns(updateRuns);
        setSixes(updatedSixes);
    }

    return(
        <div>
            <h3>Player: English Batsman</h3>
            <h1>Score: {runs}</h1>
            <h1>Sixes: {sixes}</h1>
            {
                runs > 50 && <p>You are score 50</p>
            }
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}