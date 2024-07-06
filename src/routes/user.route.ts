import express from "express";
import userControllers from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, userControllers.getCurrentUser);
router.post("/", jwtCheck, userControllers.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest,
  userControllers.updateCurrentUser
);

export default router;
