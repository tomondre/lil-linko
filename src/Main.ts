import Routes from "./routes/Routes";
import Express from "express";

const app = Express();

new Routes(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});