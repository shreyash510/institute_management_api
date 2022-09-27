const express = require('express');
const CourseRoute = express.Router();
const controller = require('../controllers/course.controller')

CourseRoute.get("/",controller.getAll);
CourseRoute.get('/:sId', controller.getById);
CourseRoute.post('/',controller.addCourse);
CourseRoute.patch('/', controller.update);
CourseRoute.delete('/', controller.delete);
module.exports = CourseRoute;
