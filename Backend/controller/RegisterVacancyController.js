const RegisterVacancy  = require('../model/RegisterVacancyModel');

const addRegisterVacancy = (req, res) => {
    const{

        Job_Title,
        F_Name,
        L_Name,
		NIC,
        Age,
        Phone_Number,
        Email,
        Address,
        Cv,
        Describe,
       
    } = req.body;

    const newRegisterVacancy = new RegisterVacancy({
		Job_Title,
        F_Name,
        L_Name,
		NIC,
        Age,
        Phone_Number,
        Email,
        Address,
        Cv,
        Describe,
       
	});

	newRegisterVacancy
		.save()
		.then((createdRegisterVacancy) => {
			res.json(createdRegisterVacancy);
		})
		.catch((err) => {
			console.log(err);
		});
};

const  getRegisterVacancy= async (req, res) => {
	try {
		const Registervacancy = await RegisterVacancy.find();
		res.json(Registervacancy);
	} catch (error) {
		res.status(400).json(error);
	}
};

const getsingleRegistervacancy = async (req, res) => {
	try {
		const id = req.params.id;
		const Registervacancy = await RegisterVacancy.findById(id);
		res.status(200).json(Registervacancy);
	} catch (error) {
		res.status(400).json(error);
	}
};

/////////////////Delete/////////////////////
const removeRegisterVacancy = async (req, res) => {
	const Job_Title = req.params.id;
	try {
		const Registervacancy = await RegisterVacancy.findById(Job_Title);
		if (!Registervacancy) {
			return res.status(404).json("There is no Vacancy");
		}
		const removeRegistervacancy = await RegisterVacancy.findByIdAndDelete(Job_Title);
		res.status(200).json(removeRegisterVacancy);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	addRegisterVacancy,
	getRegisterVacancy,
	getsingleRegistervacancy,
	removeRegisterVacancy,
};

