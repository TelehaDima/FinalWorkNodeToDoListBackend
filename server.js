const express = require('express');
const app = express();
const routes = require('./ListRoute');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_LINK)
    .then(() => console.log('Connected to DataBase'))
    .catch((err)=>console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`Port ${PORT} connected`);
}
)