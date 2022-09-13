import Order from "../../../../models/Order.model";

export default async function getOrder(req, res) {
    try {
        const query = { userEmail: req.query.userEmail };
        console.log(query)
        const orders = await Order.find(query);
        res.status(200).json({
            success: true,
            messages: "success",
            orders
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}
