import React, {useState } from 'react'
export default function TextForm(props) {
  // cretae the functionallity of onclick//
  const handelupclick=()=>{
    // console.log("uppercase convert"+Text)
    // create logic for lower to upper case
    let newText=Text.toUpperCase();
    setText(newText)
  }


  //  this is not directly work so change onchange
  const handleonchange=(event)=>{
      // console.log("on change")
    setText(event.target.value)
  }
  const [Text, setText] = useState("Enter Your Second Text");
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleonchange} id="my-box" rows="9"></textarea>
</div>
<button id="button" onClick={handelupclick}>Convert to UpperCase</button>

    </div>
  )
}
