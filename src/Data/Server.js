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
  await Service.findAll();
});

// --GET SERVICE-- Finds ID of service
app.get("/services/:reference", async (req, res) => {
  // FindByPk = find by primary key
  const currentService = await Service.findOne({
    where: { reference: req.params.id },
  });
  res.json({ currentService });
  // console.log(service)
  // res.json(service)
});
// THIS IS WHERE WE WERE.
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
