const services = require('../services/student.service')

module.exports = {
    getAll: async function (req, res) {
        try {
            let student = await services.getAll();
            res.statusCode = 200;
            res.send(student);
            // res.send(JSON.stringify(student));
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.sId;
        try {
            let student = await services.getById(id);
            res.statusCode = 200;
            res.send(student);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        const { id, value } = req.body;
        try {
            let student = await services.update(id, value);
            res.statusCode = 200;
            if(student)
                res.send("Student Update successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        const { id } = req.body;
        try {
            let student = await services.delete(id);
            res.statusCode = 200;
            if(student)
                res.send("Student Delete successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message)
        }
    }
}