function ServicePage() {
    return (<div className="ServicePage"> 
        {/* <div className="popup" id="popup-1">
            <div className="overlay"></div>
            <div className="content">
                <div className="close-btn" onclick="togglePopup()">&times;</div>
                <h1>Title</h1>
                <p>LOREM IPSUM</p>
            </div>
        </div>
            Broken needs fix
        <button onclick="togglePopup()">Show Popup</button> */} 
         <form id="ServiceForm">
              <label for="email">Email Address</label>
              <input type="text" id="email" name="email"></input>
              <input type="submit"></input>
          </form>
          <label for="Servicec">Choose a service:</label>
          <select name="Servicec" id="Servicec" form="ServiceForm">
            <option selected hidden>Select Service</option>
            <option value="Boost Bonanza">Boost Bonanza £60</option>
            <option value="Big Boost">Big Boost £40</option>
            <option value="Baby Boost">Baby Boost £20</option>
          </select>
          <h2>*MAKE SURE TO PICK THE SERVICE YOU WANT BEFORE SUBMITTING*</h2>
        <div className="Refid">
          <label>Reference ID:</label>
          <input type="text" id="Refnum" name="Refnum"></input>
          </div>
    </div>)
    
    }



    export default ServicePage;