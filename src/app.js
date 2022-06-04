import express from "express";

// Segurity 
const cors = require("cors"); 
import morgan from "morgan";
import config from "./config";
const multer = require('multer')

import pkg from "../package.json";

import { createRoles } from "./libs/initialSetup";


// Imports ROutes --------------------------------
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routers"
import questionsRoutes from "./routes/question.routes"
import answerRoutes from "./routes/answer.routes"
import kataRoutes from "./routes/kata.routes"
import kataAnswerRoutes from "./routes/kataAnswer.routes"
import excelRoutes from "./routes/excel.routes";



// Create Express App
const app = express()

//Segurity config
app.use(cors())

// Create Roles Users
createRoles()



app.use(morgan("dev"));
app.use(express.json());



// Settings
app.set("pkg", pkg);
app.set("port", config.PORT);

// Define the index Route of App
app.get("/", (req, res) => {
    res.json({
      message: "Welcome to users Scape room  API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });

// Redirections to Routes & Endpoints ------------------
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/questions', questionsRoutes)
app.use('/api/answer', answerRoutes)
app.use('/api/kata', kataRoutes)
app.use('/api/kataAnswer', kataAnswerRoutes)
app.use('/api/excel', excelRoutes)

// Export App 
export default app;