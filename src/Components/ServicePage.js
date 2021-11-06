import React,{useState, useEffect} from "react";

function ServicePage() {
    const [referenceId, setReferenceId] = useState(null);
    const [email, setEmail] = useState(null);
    const [dateCreate, setDateCreate] = useState(null);
    const [serviceChosen, setServiceChosen] = useState(null);

    // TODO Make sure validation check that the servicecreate does not create duplicate reference id's
    
    const dbServiceCreate = (event) => {
      event.preventDefault()
      const userDate = new Date();
        setDateCreate(userDate)

      const newReferenceId = Math.floor(Math.random() * 1001) +1;
        setReferenceId(newReferenceId) 
      
      fetch("http://localhost:4000/services/create", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify({
          referenceId, email, dateCreate, serviceChosen
        })
      })

      setReferenceId(null)
      setEmail("")
      setDateCreate(null)
      setServiceChosen("")
      window.location.reload()
    }

    return (
    <div className="servicePage"> 
        <form id="serviceForm" onSubmit={dbServiceCreate}>
            <label for="email">Email Address</label>
            <input type="text" id="email" name="email" 
              onChange={(e) => setEmail(e.target.value)} />
        
          <label for="serviceChosen">Choose a service:</label>
          <select name="serviceChosen" id="serviceChosen" form="ServiceForm" 
          onChange={(e) => setServiceChosen(e.target.value)}>
            <option selected hidden>Select Service</option>
            <option value="Boost Bonanza">Boost Bonanza £60</option>
            <option value="Big Boost">Big Boost £40</option>
            <option value="Baby Boost">Baby Boost £20</option>
          </select>
          <h2>*MAKE SURE TO PICK THE SERVICE YOU WANT BEFORE SUBMITTING*</h2>

          
          <button className="subButton" type="submit">Submit</button>
          </form>
    </div>)
    
    }


    export default ServicePage;

