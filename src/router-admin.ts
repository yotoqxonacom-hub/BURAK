import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controllers";
import productController from "./controllers/product.controllers";
import makeUploader from "./libs/utils/uploader";
import multer from "multer";

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
routerAdmin.get('/product/all',
    restaurantController.verifyRestaurant,
    productController.getAllProducts)
    .post('/product/create',
        restaurantController.verifyRestaurant,
        makeUploader("products").single("productImage"),
        productController.createNewProducts)
    .put('/product/:id',
        restaurantController.verifyRestaurant,
        productController.updateChosenProducts);
/* User */

export default routerAdmin;