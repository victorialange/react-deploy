import './App.css';
import { useState, useEffect } from "react";
import VipRoom from './VipRoom.js'; 

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  // const [setUserName] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   console.log("component rendered!!");
  // })
  // in this example, the code in our useEffect is called on every render (no dependency array)
  // any time state changes and triggers a re-render, the useEffect logic runs

  useEffect(() => {
    // first argument, cbf, is the logic that will run when useEffect is called
    // console.log("loggedIn state was updated");
    if (loggedIn === true) {
      setUserName('captain 🪝')
    } else {
      setUserName('')
    }
  }, [loggedIn])
  // second argument: dependency array
  // in this example: ONLY run the CBF if the value of loggedIn is updated 

  useEffect(() => {
    fetch(`https://8ball.delegator.com/magic/JSON/Is this true sup?`)
      .then( res => res.json() )
      .then( (jsonRes) => {
        // console.log(jsonRes);
        setMessage(jsonRes.magic.answer);
    })
  }, [])
  // empty dependency array, inside of that we can make the API call

  // useEffect(() => {
  //   console.log("userName is updated");
  // }, [userName])


//   are we feeling ok with the three ways of using useEffect with dependency arrays?
// no array = code runs every time the component re-renders
// an empty array = code runs ONCE on component mount and not again
// an array with a dependancy = code runs if the value of the dependency (ie a piece of state) is changed?

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  }

  const handleAnotherClick = () => {
    console.log("clicking username button");
  }

  return (
    <div className="App">
      
    <h1>Hiii</h1>
    <h2>This is our production branch!</h2>
    <button onClick={handleClick}>Click Me to login!</button>

    {/* <p>{userName}</p> */}

    <button onClick={handleAnotherClick}>Set your username!</button>

    {
      loggedIn === true
       ? <VipRoom />
       : <p>Please log in so I can say sup</p>
    }

    <h3>{message}</h3>
    </div>
  );
}

export default App;
