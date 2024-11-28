const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    Job_Title:String,
    F_Name:String,
    L_Name:String,
    NIC:String,
    Age:String,
    Phone_Number:String,
    Email:String,
    Address:String,
    Cv:String,
    Describe:String,
    


});

const RegisterVacancyModel = mongoose.model("RegisterVacancyModel",registerSchema);
module.exports = RegisterVacancyModel;