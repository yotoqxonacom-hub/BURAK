import mongoose, { Schema, Document } from "mongoose";

const orderItemSchema = new Schema({
    itemQuantity: {
        type: Number,
        required: true
    },

    itemPrice: {
        type: Number,
        required: true
    },

    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },

}, { timestamps: true, collection: "orderItems" });

export default mongoose.model("OrderItem", orderItemSchema);