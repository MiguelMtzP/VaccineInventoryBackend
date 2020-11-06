const app = require("./app")
const port = 3000
const mongoose = require('mongoose');
const config = require("./config/config");


mongoose.connect(config.dbStringConnection,err=>{
  if (err) {
    console.log("ERROR: ",err);
  }else{
    app.listen(port, () => {
      console.log(`Server listening on  http://localhost:${port}`)
    })
  }
})