import { Request, Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/product.service";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts")
        res.render("products")
    } catch (err) {
        console.log("Error, getAllProducts:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

productController.createNewProducts = async (req: Request, res: Response) => {
    try {
        console.log(".createNewProducts")

    } catch (err) {
        console.log("Error, createNewProducts:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

productController.updateChosenProducts = async (req: Request, res: Response) => {
    try {
        console.log(".updateChosenProducts")

    } catch (err) {
        console.log("Error, updateChosenProducts:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};


export default productController;
