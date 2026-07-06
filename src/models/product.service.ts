import ProductModel from "../schema/Product.model";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
} from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { Types } from "mongoose";

class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }

  /* SPA */

  /* SSR */

  // Get all products
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().lean().exec(); // lean() => plain JS object
    if (!result || result.length === 0) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    }
    return result as unknown as Product[];
  }

  // Create new product
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      const created = await this.productModel.create(input);
      return created.toObject() as Product; // convert Document to plain object
    } catch (err) {
      console.error("Error, model: createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  // Update product by ID
  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput,
  ): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .lean()
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result as unknown as Product;
  }
}

export default ProductService;

