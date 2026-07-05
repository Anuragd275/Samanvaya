const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/route');

const app = express();

dotenv.config();

app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});