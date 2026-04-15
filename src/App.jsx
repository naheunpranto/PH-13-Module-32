import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json());

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}



function App() {

  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

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

      <Suspense fallback={<h4>All posts are coming here...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>


      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback = {<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}

      <Counter></Counter>

      <Batsman></Batsman>


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
