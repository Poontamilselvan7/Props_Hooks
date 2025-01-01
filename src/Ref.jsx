import React, { useRef } from "react";
import { useState } from "react";
function Ref(){
  let[count,setCount]=useState(0);
  let countRef=useRef(0);

let increment=()=>{
  setCount(count+1);
  countRef.current++;

  console.log("State: ",count);
  console.log("Ref: ",countRef.current);

}

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}




export default Ref;