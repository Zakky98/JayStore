function UpdateService() {
  return (
    <div>
      <div className="refId">
        <label>Reference ID:</label>
        <input type="text" id="refNum" name="refNum" />
        <button>Update Service</button>
        <button>Delete Service</button>
      </div>
    </div>
  );
}

// TODO UpdateService: populate form when update button is clicked with response body. 
// TODO UpdateService: DeleteService when delete button is clicked and respond with two conditions: either,
// "Service Deleted" or "Service could not be found check reference Id"
export default UpdateService;
