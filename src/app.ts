import express  from "express";
import UserController from "../controllers/UserController";

const app = express();

app.get("/",(req, res) => res.send("Its working"));

app.get("/users", UserController.find);

app.listen(3000);