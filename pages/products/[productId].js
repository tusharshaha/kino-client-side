import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DRContainer from "../../Components/Product/DRContainer";
import ProductTop from "../../Components/Product/ProductTop";
import RelatedProduct from "../../Components/Product/RelatedProduct";
import useProducts from "../../Hooks/useProducts";

export default function ProductDetails({ product }) {
    const category = product.categories.split(', ');
    const { products } = useProducts();
    const [revChange, setRevChange] = useState(false);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/v1/review");
            const data = await res.data.reviews;
            setReviews(data);
        })()
    }, [revChange])
    // filter for related product
    const catFilter = products?.filter(p => p.categories.includes(category[2] || category[0]));
    // filter for product review
    const productRev = reviews?.filter(p => p.productId === product._id);
    // gallary for product image
    const gallary = catFilter.map(p => p.img);
    return (
        <div className="cus-container my-32">
            <ProductTop
                product={product}
                gallary={gallary}
                productRev={productRev}
            />
            <DRContainer
                productRev={productRev}
                setChange={setRevChange}
                product={product}
            />

            <RelatedProduct
                related={catFilter}
            />
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.productId;
    const res = await axios(`http://${process.env.VERCEL_URL}/api/v1/products/${id}`);
    const product = await res.data.product;
    return {
        props: { product }
    }
}