import ProductModel from "../schema/Product.model";
import {
  Product,
  ProductInput,
  ProductInquiry,
  ProductUpdateInput,
} from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { Types } from "mongoose";
import { ProductStatus } from "../libs/enums/product.enum";
import { ObjectId } from "mongoose";
import { T } from "../libs/types/common";
import ViewService from "./View.service";
import { ViewGroup } from "../libs/enums/view.enum";
import { ViewInput } from "../libs/types/view";


class ProductService {
  private readonly productModel;
  public viewService;

  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }
  /* SPA */

  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };

    console.log("Match:", match);
    if (inquiry.productCollection)
      match.productCollection = inquiry.productCollection;
    if (inquiry.search)
      match.productName = { $regex: new RegExp(inquiry.search, "i") };

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };

    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
        { $limit: inquiry.limit * 1 },
      ])
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  };

  public async getProduct(memberId: Types.ObjectId | null, id: string): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);

    const result = await this.productModel.findOne(
      { _id: productId, productStatus: ProductStatus.PROCESS },
    ).exec();

    if (!result) {
      throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    }

    if (memberId) {
      // check existence of view
      const input: ViewInput = {
        memberId: memberId,
        viewRefId: productId,
        viewGroup: ViewGroup.PRODUCT
      };
      const existView = await this.viewService.checkViewExistence(input);

      console.log("existView:", !!existView);
      if (!existView) {
        //insert new view record
        await this.viewService.insertMemberView(input);

        // increment productViews
        const result2 = await this.productModel.findOneAndUpdate(productId, { $inc: { productViews: +1 } }, { new: true }).exec();

      }
    }

    return result as unknown as Product;
  }


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

