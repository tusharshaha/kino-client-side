import Product from "../../../../models/Product.model";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function getSingleProduct(req, res){
    try {
        const product = await Product.findById(req.query.productId);
        res.status(200).json({
            success: true,
            messages: "success",
            product
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error!",
        });
    }
}