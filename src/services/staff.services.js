const db = require("./conn");
const util = require('util');
// if you happen to be in Node 8+, you can leverage the native util.promisify() with the node mysql.
// Do not forget to call it with bind() so the this will not mess up:

const query = util.promisify(db.query).bind(db);

module.exports = {
    getAll: async function () {
        let staff = await query("CALL institute_management.getStaff()");
        return staff;
    },
    getById: async function (staff_Id) {
        let staff = await query(`CALL institute_management.getstaffId(${staff_Id});`);
        return staff;
    },
    addstaff : async function (staff_name, age, gender){
        let staff = await query(`CALL institute_management.addStaff('${staff_name}',${age}, '${gender}');`);
        return staff;
    },
    update: async function (id, value) {
        let staff = await query(`CALL institute_management.staffUpdate(${id}, '${value}');`);
        return staff;
    }, 
    delete : async function (id){
        let staff = await query(`CALL  institute_management.staffDelete(${id});`);
        return staff
    }
}