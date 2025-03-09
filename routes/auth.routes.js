import { Router } from "express";
import { signOut, signUp, singnIn } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', singnIn);
authRouter.post('/sign-out', signOut
    
);

export default authRouter;