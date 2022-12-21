import SslCommerzPayment from "sslcommerz";
import { v4 as uuidv4 } from 'uuid';
import Order from "../../../../models/Order.model";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default async function payment(req, res) {
    try {
        if (req.method === "POST") {
            const order = req.body
            const tran_id = uuidv4();
            const data = {
                total_amount: order.subTotal,
                currency: 'BDT',
                tran_id,
                success_url: `${process.env.VERCEL_URL}/my_account/orders`,
                fail_url: `${process.env.VERCEL_URL}/api/v1/payment/fail`,
                cancel_url: `${process.env.VERCEL_URL}/api/v1/payment/cancel`,
                ipn_url: 'http://yoursite.com/ipn',
                shipping_method: 'Courier',
                product_name: 'Computer.',
                product_category: 'Electronic',
                product_profile: 'general',
                cus_name: 'Customer Name',
                cus_email: 'cust@yahoo.com',
                cus_add1: 'Dhaka',
                cus_add2: 'Dhaka',
                cus_city: 'Dhaka',
                cus_state: 'Dhaka',
                cus_postcode: '1000',
                cus_country: 'Bangladesh',
                cus_phone: '01711111111',
                cus_fax: '01711111111',
                ship_name: 'Customer Name',
                ship_add1: 'Dhaka',
                ship_add2: 'Dhaka',
                ship_city: 'Dhaka',
                ship_state: 'Dhaka',
                ship_postcode: 1000,
                ship_country: 'Bangladesh',
                multi_card_name: 'mastercard',
                value_a: 'ref001_A',
                value_b: 'ref002_B',
                value_c: 'ref003_C',
                value_d: 'ref004_D'
            };
            const sslcommer = new SslCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
            const resp = await sslcommer.init(data)
            const URL = await resp.GatewayPageURL;
            const option = { new: true, runValidators: true };
            await Order.findByIdAndUpdate(order._id, {tran_id}, option);
            res.status(200).json({ URL })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Internal server error!"
        })
    }
}