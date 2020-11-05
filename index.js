const app = require("./app")
const port = 3000
const mongoose = require('mongoose');



app.listen(port, () => {
  console.log(`mi serve esta escuchando en localhost:${port}`)
})