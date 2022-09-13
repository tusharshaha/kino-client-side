import Order from "../../../../models/Order.model";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function sendOrder(req, res) {
    try {
        if (req.method === "POST") {
            await Order.create(req.body);
            res.status(200).json({
                success: true,
                messages: "success",
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}