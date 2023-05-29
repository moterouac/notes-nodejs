const express = require('express');

var app = express();


app.set("port", process.env.PORT || 5002);
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

app.get('/', (req,res) => {
    res.status(200).send("Notes-nodejs working!");
})


app.use(process.env.API_VERSION_ROUTE, require("./config/routes/user-routes"));