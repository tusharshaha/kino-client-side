import ProductTop from "../../Components/Product/ProductTop";

export default function ProductDetails({ product }) {
    return (
        <div className="cus-container my-32">
            <ProductTop product={product}></ProductTop>
        </div>
    )
}
// define all dynamic path
export async function getStaticPaths() {
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
    const paths = products?.map(product => {
        return {
            params: { productId: product._id}
        }
    })
    return {
        paths,
        fallback: false
    }
}
// finding single product via id
export async function getStaticProps(context) {
    const id = context.params.productId;
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
    const product = products?.find(p => p._id === id);
    return {
        props: { product }
    }
}