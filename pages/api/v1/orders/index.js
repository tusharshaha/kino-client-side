import Order from "../../../../models/Order.model";

export default async function sendOrder(req, res) {
    try {
        if (req.method === "POST") {
            const result = await Order.create(req.body);
            res.status(200).json({
                success: true,
                messages: "success",
                data: result
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}