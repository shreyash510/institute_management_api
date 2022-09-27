const express = require('express');
const StudentRouter = express.Router();
const controller = require('../controllers/student.controller')

StudentRouter.get("/",controller.getAll);
StudentRouter.get('/:sId', controller.getById);
StudentRouter.post('/', controller.addStudent);
StudentRouter.patch('/', controller.update);
StudentRouter.delete('/', controller.delete);
StudentRouter.post("/auth", controller.login);
module.exports = StudentRouter;
