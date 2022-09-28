const services = require('../services/auth.services');

module.exports = {
    studentRegistration: async function (req, res) {
        const { student_name, age, email, pass, courseId } = req.body;
        try {
            let student = await services.studentRegistration(student_name, age, email, pass, courseId);
            res.statusCode = 200;
            if (student) {
                res.send("Student Added Sucessfully");
            } else {
                res.send("Student already exists");
            }
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    login : async function (req, res){
        const {email , pass} = req.body;
        try{
            let student = await services.login(email, pass);
            res.statusCode = 200;
            res.send(student);
        }catch(error){
            res.statusCode = 500;
            res.send(error.message);
        }
    }
}