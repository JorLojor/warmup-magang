const express = require("express");
const router = express.Router();

const data = [
  {
    nama: "orang satu",
    kelas: "it4606",
    nim: "1303232",
  },
  {
    nama: "orang dua",
    kelas: "it4605",
    nim: "1301132",
  },
];

router.get("/getAll", (req, res) => {
  res.json({
    data: data,
  });
});

router.get("/getById/:id", (req, res) => {
  const id = req.params.id;
  const person = data.find((d) => d.nim === id);

  if (person) {
    res.json({
      data: person,
    });
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});

module.exports = router;
