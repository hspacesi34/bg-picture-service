const app = require('./app')
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log("appli lancée sur port " + port);
})

