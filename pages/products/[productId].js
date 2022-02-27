import { useRouter } from "next/router"

export default function ProductDetails({ product }) {
    console.log(product)
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            {productId}
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
    const paths = products?.map(product => {
        return {
            params: { productId: product._id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.productId;
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
    const product = products?.find(p => p._id === id);
    return {
        props: { product }
    }
}