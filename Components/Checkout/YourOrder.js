import React from 'react';

const YourOrder = ({ cartItem, subTotal, submitOrder, accordion, setAccordion }) => {
    const active = "trasition duration-300 relative";
    return (
        <div className='p-6 border-2 h-[900px] border-sky-200'>
            <h4 className='font-medium border-b-2 pb-3 mb-6'>Your Order</h4>
            <table className='text-slate-400 w-full'>
                <thead>
                    <tr className='border-b'>
                        <th className='pb-2 text-left'>Product</th>
                        <th className='pb-2 text-right'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItem.map(item => <tr key={item._id} className='border-b'>
                            <td className='py-3 text-left'>
                                {item.name}
                                <span className='font-bold ml-2'>x {item.qty}</span>
                            </td>
                            <td className='py-3 text-right'>
                                &#163;{item.curPrice * item.qty}.00
                            </td>
                        </tr>)
                    }
                    <tr className='border-b'>
                        <td className='py-3 text-left'>
                            Subtotal
                        </td>
                        <td className='py-3 text-right'>
                            &#163;{subTotal}.00
                        </td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 text-left'>
                            Total
                        </td>
                        <td className='py-3 font-bold text-right'>
                            &#163;{subTotal}.00
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* payment method option here  */}
            <div className='flex mt-10 flex-col gap-2'>
                <div className='relative'>
                    <button onClick={() => setAccordion("bank")} className='border uppercase text-left w-full py-2 px-6'>
                        Direct Bank Transfer
                    </button>
                    <div className={`${accordion === "bank" ? active : "hidden"} text-slate-400 border py-6 px-6`}>
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </div>
                </div>
                <div className='relative'>
                    <button onClick={() => setAccordion("check")} className='border uppercase text-left w-full py-2 px-6'>
                        Check Payment
                    </button>
                    <div className={`${accordion === "check" ? active : "hidden"} text-slate-400 border py-6 px-6`}>
                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                    </div>
                </div>
                <div className='relative'>
                    <button onClick={() => setAccordion("cash")} className='border uppercase text-left w-full py-2 px-6'>
                        Cash on Delivery
                    </button>
                    <div className={`${accordion === "cash" ? active : "hidden"} text-slate-400 border py-6 px-6`}>
                        Pay with cash upon delivery.
                    </div>
                </div>
            </div>
            <p className='text-slate-400 mt-4'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            <button onClick={submitOrder} className='product-btn w-full mt-6'>Place Order</button>
        </div>
    );
};

export default YourOrder;