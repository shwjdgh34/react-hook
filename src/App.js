import React from 'react';
import './App.scss';
import Growth from './pages/Growth';
import Clock from './pages/Clock';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        {/* <Growth /> */}
      </header>
    </div>
  );
}
export default App;
// import React, { useState } from 'react';
// import './App.scss';
// import NameTag from './component/nameTag';

// const nameList = [
//   { name: 'nono', country: 'Korea' },
//   { name: 'babo', country: 'America' },
//   { name: 'nono2', country: 'AU' }
// ];

// function App() {
//   const [age, setAge] = useState(10);
//   const [list, setList] = useState(nameList);
//   const [editable, setEditable] = useState(false);
//   const [name, setName] = useState('');
//   const [income, setIncome] = useState('high');
//   const ageUpHandle = () => {
//     setAge(age + 1);
//   };
//   const ageDownHandle = () => {
//     setAge(age - 1);
//   };
//   const remove = e => {
//     //console.dir(e.target.name);
//     const filteredList = list.filter(v => v.name !== e.target.name);
//     setList(filteredList);
//   };
//   const editHandle = () => {
//     setEditable(true);
//   };
//   const keyPressHandle = (e, i) => {
//     if (e.key === 'Enter') {
//       list[i].name = e.target.value;
//       setEditable(false);
//     }
//   };
//   const handleNameChange = e => {
//     setName(e.target.value);
//   };
//   const handleIncomeChange = e => {
//     setIncome(e.target.value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('state:', name, income);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="name title">REACT HOOK</h1>
//         {list.map((v, i) => {
//           return (
//             <NameTag
//               key={i}
//               index={i}
//               info={v}
//               onClick={remove}
//               editable={editable}
//               onDoubleClick={editHandle}
//               onKeyPress={keyPressHandle}
//             />
//           );
//         })}

//         <h2>Age : {age}</h2>
//         <button onClick={ageUpHandle}>age up</button>
//         <button onClick={ageDownHandle}>age down</button>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <span>name</span>
//             <input type="text" value={name} onChange={handleNameChange}></input>
//           </div>
//           <div>
//             <span>income</span>
//             <select value={income} onChange={handleIncomeChange}>
//               <option value="high">high</option>
//               <option value="mid">mid</option>
//               <option value="low">low</option>
//             </select>
//             <input type="submit" value="submit"></input>
//           </div>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

// ///////// useEffect
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;
//////////////////////////
