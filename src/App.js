// import React, { useState, useEffect } from 'react'

// function App() {
//   const [data, setData] = useState([{}])

//   useEffect(() => {
//     const getData = () => {
//       fetch("/members").then(
//         res => res.json()
//       ).then(
//         data => {
//           setData(data)
//           console.log(data)
//         }
//       )
//     }
//     return () => getData();
//   }, [])

//   return (
//     <div>
//       {(typeof data.members === 'undefined') ? (
//         <p>Loading.....</p>
//       ) : (
//         data.members.map((member, i) => (
//           <p key={i}>{member}</p>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;
function App() {
  return (
      <>
          <div className="App">App</div>
      </>
  );
}

export default App;
