import "./App.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("I am clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Counter></Counter>


      {/* <button onclick="handleClick()">Click Me</button>     */}
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>

      <button
        className="btn"
        onClick={function handleClick2() {
          alert("I am clicked 2");
        }}
      >
        Click Me - 2
      </button>

      <button className="btn" onClick={handleClick3}>
        Click Me - 3
      </button>

      <button
        className="btn"
        onClick={() => {
          alert("I am clicked 4");
        }}
      >
        Click Me - 4
      </button>

      <button className="btn" onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
