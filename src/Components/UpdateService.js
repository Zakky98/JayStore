// import e from "express";
import React, { useState, useEffect } from "react";

function UpdateService() {
  const [reference, setReferenceId] = useState("reference");
  const [email, setEmail] = useState("email");
  const [date, setDate] = useState("date");
  const [service, setServiceChosen] = useState("service");

  const handleUpdate = async () => {
    const currentService = await fetch(`http://localhost:4000/services/${reference}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference
      }),
    });
    console.log(
      currentService.json(),
      currentService
      )
    return currentService.json();
  };

  const UpdateService = async () => {
    console.log("Before fetch request" + reference)
    const currentService = await fetch(`http://localhost:4000/services/${reference}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        reference,
        email,
        date,
        service,
      }), 

      
    })
 
    .then(data => {
      console.log(reference) 
      console.log(data)
      data.json()
    })
    .catch((e) => {
      console.log(e)
    })
    console.log(currentService + reference) 
  };

  const postGetReq = (event) => {
    event.preventDefault();
    setReferenceId(reference)
  }

  // Delete Service

  const DeleteService = async () => {
    console.log("Before fetch request" + reference)
    const currentService = await fetch(`http://localhost:4000/services/${reference}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        reference,
        email,
        date,
        service,
      }), 

      
    })
 
    .then(data => {
      console.log(reference) 
      console.log(data)
      data.json()
    })
    .catch((e) => {
      console.log(e)
    })
    console.log(currentService + reference) 
  };

  
  return (
    <div>
      <div className="refId">
        <label>Reference ID:</label>
        <input required type="text" id="refNum" name="refNum" onChange={(e) => setReferenceId(e.target.value)}/>
      
      </div>
      <form>
        <label for="reference" >Reference</label>
        <input type="text" name="reference" value={reference} onChange={(e) => setReferenceId(e.target.value)} required/>

        <label for="email" >Email</label>
        <input type="text" name="email" value={email} onChange={(e) => setReferenceId(e.target.value)} required/>
        
        <label for="date" >Date</label>
        <input type="text" name="date" value={date} onChange={(e) => setReferenceId(e.target.value)} required/>
        
        <label for="service" >Service</label>
        <input type="text" name="service" value={service} onChange={(e) => setReferenceId(e.target.value)} required/>
      </form>

      <div className="refId">
      <button onClick={UpdateService}>Update Service</button>
        <button onClick={DeleteService}>Delete Service</button>
        </div>
    </div>
  );
}

// GET SERVICE AINT WORKING CHIEF. 
// TODO UpdateService: populate form when update button is clicked with response body or a response error. 
// TODO UpdateService: DeleteService when delete button is clicked and respond with two conditions: either,
// "Service Deleted" or "Service could not be found check reference Id"
// TODO MAYBE: Add conditional visibility to updateService. 
export default UpdateService;
