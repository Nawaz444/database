const Router = require('express').Router;

const admissionsRoutes = require('./admissions');


const router = Router();

router.use('/admissions', admissionsRoutes);


module.exports = router;
