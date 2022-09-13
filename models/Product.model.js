import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: true,
        trim: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name too large"]
    },
    img: {
        type: String,
        required: true,
        trim: true,
    },
    curPrice: {
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
    prevPrice: {
        type: String,
        min: [0, "Previous price can't be negative"],
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
        message: "Previous price is not valid!"
    },
    categories: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    }
})

const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema)

export default ProductModel;