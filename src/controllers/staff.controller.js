const services = require('../services/staff.services')

module.exports = {
    getAll: async function (req, res) {
        try {
            let staff = await services.getAll();
            res.statusCode = 200;
            res.send(staff);
            // res.send(JSON.stringify(staff));
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.sId;
        try {
            let staff = await services.getById(id);
            res.statusCode = 200;
            res.send(staff);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    addstaff : async function (req, res){
        const {staff_name, age, gender} = req.body;
        try{
            let staff = await services.addstaff(staff_name, age, gender);
            res.statusCode = 200;
            if(staff)
                res.send("staff Added Successfully!");
        }catch(error){
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        const { id, value } = req.body;
        try {
            let staff = await services.update(id, value);
            res.statusCode = 200;
            if(staff)
                res.send("staff Update successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        const { id } = req.body;
        try {
            let staff = await services.delete(id);
            res.statusCode = 200;
            if(staff)
                res.send("staff Delete successfully!");
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message)
        }
    }
}