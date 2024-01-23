import React from "react";
import axios from "axios";

function Sol() {
  const handleSumbit = (e)=>{
    e.preventDefault()
let water = document.getElementById("water").value;
let reuse = document.getElementById("Reuse-pincode").value;
let name = document.getElementById("name").value;
let number = document.getElementById("number").value;
let key = {
    name:name,
    number:number,
    report:water,
    pincode:reuse,
}
axios.post("http://localhost:5010/insert",key).then((res)=>{
    console.log(res);
    if(res.data.status==="inserted"){
        alert("Values are inserted");

    }
    else
    alert("Not inserted")
})
}
  return (
    <>
    <form className="text-light" onSubmit={handleSumbit}>
        <input type='text' id='name' className="d-block m-3" placeholder='Enter your name here'/>
        <input type="text" id="number" className="d-block m-3" placeholder="Enter your number"/>
 
      <h2>  Water</h2>
    <strong>Water need to be reserved by the water management. Our water mostly has been swept to the ocean. This will prevent water shortage, so we will be likely to create water shortage</strong> We need to prevent this problem by resisting the government about the water wastages that are happening in our Country,<code className="text-light">.The country must be divided by different regions that are either surrounded by water bodies or landlocked.</code>We need to resist about the instances to the government, Reporting us is the neccessary thing you need to do.
      
       <h2>  Reusability</h2>
     <strong>Corporates and many Stores still has the usage of plastics and it cannot be changed.</strong> We need to recycle not just plastics but every goods that returns as waste so the efficiency will be maintained. <code className="text-light">In your locality followed by a pincode make a Reuse code, this will be used to scan that the waste is on our store and you return the value for that reused waste. And sell it to us.</code>, We will give renumberation and you will the part of our social work.
<br/>
     
<div class="alert alert-danger" role="alert">
  You can fill any one of the following. 
</div>
<input type="text" id="water" className="d-block m-3 w-25" placeholder="Report about the water issue in your local" />
<input type="text" id="Reuse-pincode" className="d-block m-3 w-25" placeholder="Enter your location pincode" />
<button type="submit" onClick={(a)=>{
            console.log(a)
            let key = {
                id:a
            }
        }} className="btn btn-success m-5">Submit</button>

      </form>
    </>
  );
}

export default Sol;