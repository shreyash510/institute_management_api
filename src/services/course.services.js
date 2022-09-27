const db = require("./conn");
const util = require('util');
// if you happen to be in Node 8+, you can leverage the native util.promisify() with the node mysql.
// Do not forget to call it with bind() so the this will not mess up:

const query = util.promisify(db.query).bind(db);

module.exports = {
    getAll: async function () {
        let course = await query("CALL institute_management.getCourse ();");
        return course;
    },
    getById: async function (courseId) {
        let course = await query(`CALL institute_management.getCourseId(${courseId});`);
        return course;
    },
    addCourse : async function(course_name, duration, fee){
        let course = await query(`CALL institute_management.addCourse('${course_name}', ${duration}, ${fee});`);
        return course
    },
    update: async function (id, value) {
        let course = await query(`CALL institute_management.updateCourse(${id}, '${value}');`);
        return course;
    }, 
    delete : async function (id){
        let course = await query(`CALL institute_management.courseDelete(${id});`);
        return course
    }
}