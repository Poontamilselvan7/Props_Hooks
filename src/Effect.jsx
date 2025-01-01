import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Effect(){
  let[count,setCount]=useState("");
//   useEffect(()=>{
//       console.log("Value Updated");
//       return(()=>{
//         console.log("Code Cleanup");
//       })
//   },[count])

  return(
    <div>
      <h1>Value:{count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}

      <input type="text" value={count} onChange={(e) => setCount(console.log(e.target.value))} />
    </div>
  )
}




export default Effect;