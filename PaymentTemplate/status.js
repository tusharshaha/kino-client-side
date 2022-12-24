exports.paymentFail = `
<html>
    <body>
        <div style="text-align: center; color: red">
            <h1>Your payment is not completed. Back to
                <a
                    style="color: red"
                    href="https://kino-one.vercel.app/checkout"
                >
                    Previous page
                </a>
            </h1>
        </div>
    </body
</html>
`

exports.paymentSuccess = `
<html>
    <body>
        <div style="text-align: center; color: green">
            <h1>Your payment completed successfully. View
                <a
                    style="color: green"
                    href="https://kino-one.vercel.app/my_account/orders"
                >
                    your order.
                </a>
            </h1>
        </div>
    </body
</html>
`