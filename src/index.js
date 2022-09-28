const express = require('express');
const app = express();
const cors = require('cors');
const port = require('./constants/index')

const StudentRouter = require('./routes/student.router');
const CourseRoute = require('./routes/course.router');
const StaffRoute = require('./routes/staff.router');

require('./services/conn')
app.use(express.json());
app.use(cors());

app.use('/student', StudentRouter);
app.use('/course', CourseRoute);
app.use('/staff', StaffRoute);

app.get('/', (req, res) => {
    res.json("This is server side");
});

app.listen(port.PORT, () => {
    console.log("Listening at", port.PORT);
})