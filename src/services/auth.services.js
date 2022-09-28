const db = require("./conn");
const util = require('util');
const jsonWebToken = require("jsonwebtoken");
const constants = require('../constants/index')
// if you happen to be in Node 8+, you can leverage the native util.promisify() with the node mysql.
// Do not forget to call it with bind() so the this will not mess up:

const query = util.promisify(db.query).bind(db);
const bcrypt = require("bcrypt");


module.exports = {
    studentRegistration: async function (student_name, age, email, pass, courseId) {
        const isEmailExits = await query(`CALL institute_management.studentLogin('${email}');`);
        if (isEmailExits[0].length !== 0) {
            return false
        } else {
            const genHashPass = bcrypt.hashSync(pass, 12);
            console.log(genHashPass);
            await query(`CALL institute_management.student_registration ("${student_name}", ${age}, "${email}", "${genHashPass}", ${courseId});`);
            return true;
        }
    },
    login: async function (email, pass) {
        const response = await query(`CALL institute_management.studentLogin('${email}');`);
        let isPasswordCorrect = await bcrypt.compare(pass, response[0][0].pass);
        let exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
        let token = jsonWebToken.sign(
          { exp: exp},
          constants.SECRETE_KEY
        );
        console.log(token);
        return isPasswordCorrect ? {message : "login Successfully", token: token } :{ message : "wrong identity"};
    }
}