import Order from "../../../../models/Order.model";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function paymentStatus(req, res) {
    try {
        if (req.method === "POST") {
            if (req.query.status === "fail") {
                const tran_id = req.body.tran_id
                await Order.findOneAndDelete({ tran_id })
                res.status(400).redirect("https://kino-one.vercel.app/checkout")
            }
            if (req.query.status === "cancel") {
                const tran_id = req.body.tran_id
                await Order.findOneAndDelete({ tran_id })
                res.status(400).redirect("https://kino-one.vercel.app/checkout")
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}