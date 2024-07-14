import express from "express";
import { param } from "express-validator";
import searchRestaurantController from "../controllers/searchRestaurant.controller";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a string"),
  searchRestaurantController.searchRestaurants
);


export default router;