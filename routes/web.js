import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:id", homeController.getDetailpage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditUser);
  router.post("/update-user", homeController.postUpdateUser);
  return app.use("/", router);
};

module.exports = initWebRoute;
