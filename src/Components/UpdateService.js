// import e from "express";
import React, { useState, useEffect } from "react";

function UpdateService() {
  const [reference, setReferenceId] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [service, setServiceChosen] = useState();

  // Check Service

  const checkService = async () => {
    const currentService = await fetch(
      `http://localhost:4000/services/${reference}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference,
        }),
      }
    ).then(async (res) => {
      setReferenceId(res.body.reference);
      setEmail(res.body.email);
      setServiceChosen(res.body.service);
    });
  };

  // fix check service

  //   .then(res => {res.json()
  //   console.log(res.json())})
  //   .then(data => {
  //       console.log("json Response" + data)
  //       for (const field of data.fields) {
  //         setReferenceId(field.reference)
  //         setEmail(field.email)
  //         setServiceChosen(field.service)
  //       }
  //     })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  // console.log(currentService)

  // Update Service

  const UpdateService = async () => {
    const userDate = new Date();
    setDate(userDate);

    console.log("Before fetch request" + reference);
    const currentService = await fetch(
      `http://localhost:4000/services/${reference}/update`,
      {
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
      }
    )
      .then((data) => {
        console.log(reference);
        console.log(data);
        data.json();
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(currentService + reference);
  };

  // Delete Service

  const DeleteService = async () => {
    console.log("Before fetch request" + reference);
    const currentService = await fetch(
      `http://localhost:4000/services/${reference}/delete`,
      {
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
      }
    )
      .then((data) => {
        console.log(reference);
        console.log(data);
        data.json();
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(currentService + reference);
  };

  return (
    <div>
      <div className="refId">
        <label>Reference ID:</label>
        <input
          required
          type="text"
          id="refNum"
          name="refNum"
          onChange={(e) => setReferenceId(e.target.value)}
        />
      </div>
      <form>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label for="service">Service</label>
        <select
          required
          name="serviceChosen"
          id="serviceChosen"
          form="ServiceForm"
          onChange={(e) => setServiceChosen(e.target.value)}
        >
          <option selected hidden>
            Select Service
          </option>
          <option value="Boost Bonanza">Boost Bonanza £60</option>
          <option value="Big Boost">Big Boost £40</option>
          <option value="Baby Boost">Baby Boost £20</option>
        </select>

        {/* <input type="text" name="service" value={service} onChange={(e) => setReferenceId(e.target.value)} required/> */}
      </form>
      {/* Does service need to be changed to an option. see if it works. */}
      <div className="refId">
        <button onClick={checkService}>Check Service</button>
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
