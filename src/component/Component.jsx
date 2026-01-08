import { useState } from "react";



function Count () {

    let[count,SetCount]=useState("ON");
    const btnClass= count=="ON"?"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      : "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded";
   
    return ( <>
   <h1>this button is {count}</h1>
   <button onClick={()=>{
     if(count=="ON"){
        SetCount("OFF")
       
     }else{
        SetCount("ON")
         
     }
   }}  className={btnClass}>{count}</button>

  
    </> );
}

export default Count;