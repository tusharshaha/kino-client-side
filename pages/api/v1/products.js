import Product from "../../../models/Product.model";

export default async function getProduct(req, res) {
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