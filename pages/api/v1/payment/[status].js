import Order from "../../../../models/Order.model";
import { paymentSuccess, paymentFail } from "../../../../PaymentTemplate/status";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function paymentStatus(req, res) {
    try {
        if (req.method === "POST") {
            if (req.query.status === "success") {
                res.status(200).send(paymentSuccess)
            }
            if (req.query.status === "fail") {
                const tran_id = req.body.tran_id
                await Order.findOneAndDelete({ tran_id })
                res.status(400).send(paymentFail)
            }
            if (req.query.status === "cancel") {
                const tran_id = req.body.tran_id
                await Order.findOneAndDelete({ tran_id })
                res.status(400).send(paymentFail)
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}