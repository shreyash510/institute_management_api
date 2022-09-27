const db = require("./conn");
const util = require('util');
// if you happen to be in Node 8+, you can leverage the native util.promisify() with the node mysql.
// Do not forget to call it with bind() so the this will not mess up:

const query = util.promisify(db.query).bind(db);

module.exports = {
    getAll: async function () {
        let student = await query("CALL institute_management.get_student_info()");
        return student;
    },
    getById: async function (studentId) {
        let student = await query(`CALL institute_management.getStudentId(${studentId});`);
        return student;
    },
    addStudent: async function (student_name, age, email, pass, courseId) {
        const isEmailExits = await query(`CALL institute_management.studentLogin('${email}');`);
        // console.log(isEmailExits[0].length)
        if (isEmailExits[0].length !== 0) {
            return false
        } else {
            await query(`CALL institute_management.student_registration ("${student_name}", ${age}, "${email}", "${pass}", ${courseId});`);
            return true;
        }
    },
    update: async function (id, value) {
        let student = await query(`CALL institute_management.studentUpdate(${id}, '${value}');`);
        return student;
    },
    delete: async function (id) {
        let student = await query(`CALL institute_management.studentDelete(${id});`);
        return student
    },
    login: async function (email, pass) {
        const response = await query(`CALL institute_management.studentLogin('${email}');`);
        // console.log(response[0][0])
        if (response) {
            if (response[0][0].pass == pass) {
                return "login Successfully"
            } else {
                return "wrong identity";
            }
        } else {
            throw "fetch error"
        }
    }
}