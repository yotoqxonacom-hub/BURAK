import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controllers";
import productController from "./controllers/product.controllers";


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
routerAdmin.get('/product/all', productController.getAllProducts)
    .post('/product/create', productController.createNewProducts)
    .put('/product/:id', productController.updateChosenProducts);
/* User */

export default routerAdmin;