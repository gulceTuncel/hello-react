import "./App.css";
// import React from 'react';
import Header from "./components/Header";
import User from "./components/User";
const name = "Mehmet";
const surname = "Seven";
const isLoggedIn = true;

function App() {
  //  return React.createElement('div',null,"Hello");
  return (
    <>
      {/* <h1>Hello react</h1>
     <Header/>
     <Header/>
     <Header/>
     <p className='xyz'>lorem</p>

     <label htmlFor='myInput'>
      Name 
      <input id='myInput'></input>
     </label> */}

      {/* Değişken Render Etme */}
      {/* <h1>{name} {surname}</h1>
     <h1>{`Benim adım ${name} ${surname}`}</h1> */}

      {/* Conditional Rendering */}
      {/* {isLoggedIn && `Benim adım ${name} ${surname}`}
      <hr />
      {isLoggedIn ? `Benim adım ${name} ${surname}` : `Giriş yapmadınız`} */}

      <User name="Mehmet" surname="Seven" isLoggedIn={false}/>
    
    
    </>
  );
}

export default App;
