import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controllers";

/* Restaurant */
routerAdmin.get('/', restaurantController.goHome);
routerAdmin
    .get('/login', restaurantController.getLogin)
    .post('/login', restaurantController.processLogin);
routerAdmin
    .get('/signup', restaurantController.getSignup)
    .post('/signup', restaurantController.processSignup);

routerAdmin
    .get('/check-me', restaurantController.checkAuthSession);
routerAdmin
    .get('/logout', restaurantController.logout);

/* Producty */
/* User */

export default routerAdmin;