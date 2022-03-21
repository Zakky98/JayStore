const express = require("express");
const { Service } = require("./ServiceModel");
const app = express();
const cors = require("cors");
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --GET SERVICES--
app.get("/services", async (req, res) => {
  const services = await Service.findAll();
  console.log(services);
});

// --GET SERVICE-- Finds ID of service
app.post("/services/:reference", async (req, res) => {
  // FindByPk = find by primary key
  const { reference } = req.body;
  const service = await Service.findOne({
    where: { reference: reference },
  });
  await res;
  // const resReference = service.reference
  // const resEmail = service.email
  // const resService = service.service
  res.json({
    reference: res.reference,
    email: res.email,
    service: res.service
  })
  console.log("res" + res.json) 
  console.log(service)
});

// --ADD SERVICE--
app.post("/services/create", async (req, res) => {
  const newService = Service.create(req.body);
  await res;
  console.log(newService);
});
// --UPDATE SERVICE--
app.post("/services/:reference/update", async (req, res) => {
  const { id, reference, email, date, service } = req.body;
  await Service.update(
    { reference: reference, email: email, date: date, service: service },
    {
      where: {
        reference: reference,
      },
    }
  );
});
// --DELETE SERVICE--
app.post("/services/:reference/delete", async (req, res) => {
  const { id, reference, email, date, service } = req.body;
  await Service.destroy({
    where: {
      reference: reference,
      // email: email, can be used later.
    },
  });
});

// --RUN SERVER--
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
