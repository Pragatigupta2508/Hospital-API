const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hospital API Running Successfully");
});

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const patientRoutes = require("./routes/patientRoutes");

app.use("/patients", patientRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hospital API Running Successfully");
});
