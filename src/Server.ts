import MainRouter from "./routes/MainRouter";
import Express from "express";

const app = Express();

//---------------MainRouter---------------
new MainRouter(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});