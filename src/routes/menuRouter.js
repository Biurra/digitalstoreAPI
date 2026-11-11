import { Router } from "express";

const menuRouter = Router();

menuRouter.get("/home", controllers.homescreen);

export default menuRouter;
