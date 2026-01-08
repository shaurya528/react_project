import React, { useState } from "react";

function ManageArray () {


const [name , SetName]=useState('')
const[artist,SetArtist]=useState([])

function save(e){
  if(name.trim()=="") return 

 SetArtist((pre)=>[
...pre,{id:pre.length+1,name:name}]
)
SetName("")
}




    return ( <>
      <input onChange={(e)=>{
              SetName(e.target.value)
      }}/>

      <button onClick={save}> Add</button>

    <ul>
      {artist.map((arrt)=>{
        return  <li key={arrt.id}>{arrt.name}</li>
      })}
    </ul>
    </> );
}

export default ManageArray;
