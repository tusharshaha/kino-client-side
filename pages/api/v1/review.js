import Review from "../../../models/Review.model";

export default async function review(req, res) {
    try {
        if (req.method === "GET") {
            const reviews = await Review.find({});
            res.status(200).json({
                success: true,
                messages: "success",
                reviews
            });
        } else if (req.method === "POST") {
            await Review.create(req.body);
            res.status(200).json({
                success: true,
                messages: "success",
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}