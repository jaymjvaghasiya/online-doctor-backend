let express = require('express');
let app = express();
let cors = require('cors');

app.use(express.json());
app.use(cors());

let userRoute = require('./Routes/UserRoute');
app.use('/user', userRoute);
let doctorRoute = require('./Routes/DoctorRoute');
app.use('/doctor', doctorRoute);

let mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Online_Doctor", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database is connected.");
}).catch((err) => {
    console.log(err);
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
})