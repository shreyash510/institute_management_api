const express = require('express');
const StaffRoute = express.Router();
const controller = require('../controllers/staff.controller')

StaffRoute.get("/",controller.getAll);
StaffRoute.get('/:sId', controller.getById);
StaffRoute.post('/',controller.addstaff);
StaffRoute.patch('/', controller.update);
StaffRoute.delete('/', controller.delete);
module.exports = StaffRoute;
