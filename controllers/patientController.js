const Patient = require("../models/Patient");

exports.createPatient = async (req,res)=>{
try{
const patient = await Patient.create(req.body);
res.status(201).json(patient);
}catch(err){
res.status(400).json({error:err.message});
}
};

exports.getPatients = async (req,res)=>{
try{
const patients = await Patient.find();
res.status(200).json(patients);
}catch(err){
res.status(500).json({error:err.message});
}
};

exports.getPatientById = async (req,res)=>{
try{
const patient = await Patient.findById(req.params.id);
res.status(200).json(patient);
}catch(err){
res.status(500).json({error:err.message});
}
};

exports.updatePatient = async (req,res)=>{
try{
const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new:true});
res.status(200).json(patient);
}catch(err){
res.status(500).json({error:err.message});
}
};

exports.deletePatient = async (req,res)=>{
try{
await Patient.findByIdAndDelete(req.params.id);
res.status(200).json({message:"Patient deleted"});
}catch(err){
res.status(500).json({error:err.message});
}
};

exports.searchPatient = async (req,res)=>{
try{
const name = req.query.name;
const patients = await Patient.find({ fullName: {$regex:name,$options:"i"} });
res.status(200).json(patients);
}catch(err){
res.status(500).json({error:err.message});
}
};