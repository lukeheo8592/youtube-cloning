import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");


const handlehome = (req,res) =>{

}

app.use(logger);
app.get("/", handlehome);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);
