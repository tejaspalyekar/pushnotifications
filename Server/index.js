const express = require('express');
const app = express();
const appRoutes = require("./routes/app.routes");

app.use(express.json());
app.use("/api", appRoutes);

app.listen(process.env.PORT || 4000, function(){
    console.log("listening...");
});
