import express from "express";
import UserController from "../Controllers/UserController.js";

let router = express.Router();

router.post('/register', UserController.register);


export const UserRoutes = router;
