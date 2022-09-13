import Order from "../../../../models/Order.model";

export default async function getOrder(req, res) {
    try {
        const query = { userEmail: req.query.userEmail };
        console.log(query)
        const result = await Order.find(query);
        res.status(200).json({
            success: true,
            messages: "success",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}
