const services = require('../services/course.services')

module.exports = {
    getAll: async function (req, res) {
        try {
            let course = await services.getAll();
            res.statusCode = 200;
            res.send(course);
            // res.send(JSON.stringify(course));
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.sId;
        try {
            let course = await services.getById(id);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    addCourse: async function (req, res) {
        const { course_name, fees, duration } = req.body;
        try {
            let course = await services.addCourse(course_name, fees, duration);
            res.statusCode = 200;
            if (course)
                res.send("Course Added Successfully");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        const { id, value } = req.body;
        try {
            let course = await services.update(id, value);
            res.statusCode = 200;
            if (course)
                res.send("course Update successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        const { id } = req.body;
        try {
            let course = await services.delete(id);
            res.statusCode = 200;
            if (course)
                res.send("course Delete successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message)
        }
    }
}