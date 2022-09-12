import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userEmail: String,
    date: String,
    status: String,
    payment: {
        type: String,
        enum: {
            values: ["Direct Bank Transfer", "Check Payment", "Cash on Delivery"],
            message: "Payment can't be {VALUE}"
        }
    },
    orders: [{
        productId: {
            type: String,
            required: true
        },
        pName: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true,
            min: [0, "Price can't be negative"],
            validate: {
                validator: (value) => {
                    const isNumber = parseFloat(value);
                    if (isNumber) {
                        return true
                    } else {
                        return false
                    }
                }
            },
            message: "Current price is not valid!"
        },
        qty: {
            type: Number,
            required: true,
            min: [0, "Quantity can't be negative"]
        }
    }],
    billInfo: {
        FName: String,
        email: String,
        LName: String,
        company: String,
        country: String,
        street1: String,
        street2: String,
        city: String,
        post_code: String,
        phone: String
    }
})

const OrderModel = mongoose.model("Orders", orderSchema);

export default OrderModel;