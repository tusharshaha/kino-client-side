import Product from "../../../../models/Product.model";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function getProducts(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            messages: "success",
            products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error!",
        });
    }
}