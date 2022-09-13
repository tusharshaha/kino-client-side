import connectDB from "../../utils/connectDB";

export default function server(req, res) {
    try {
        connectDB();
        res.json({
            message: "database connected successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!",
        })
    }
}