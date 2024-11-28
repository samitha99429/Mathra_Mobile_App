const express = require('express');
const router = express.Router();

const {

    addRegisterVacancy,
    getRegisterVacancy,
    removeRegisterVacancy,
    getsingleRegistervacancy,
}=require("../controller/RegisterVacancyController");

router.get("/all",getRegisterVacancy);
router.post("/", addRegisterVacancy);
router.post("/:id", removeRegisterVacancy);
router.get("/:id", getsingleRegistervacancy);


module.exports = router;
