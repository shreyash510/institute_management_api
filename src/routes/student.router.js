const express = require('express');
const StudentRouter = express.Router();
const controller = require('../controllers/student.controller')
const auth = require('../controllers/auth.controller');

StudentRouter.get("/",controller.getAll);
StudentRouter.get('/:sId', controller.getById);
StudentRouter.patch('/', controller.update);
StudentRouter.delete('/', controller.delete);

StudentRouter.post("/auth", auth.login);
StudentRouter.post('/', auth.studentRegistration);

module.exports = StudentRouter;

