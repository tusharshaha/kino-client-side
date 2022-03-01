import axios from "axios";
import DRContainer from "../../Components/Product/DRContainer";
import ProductTop from "../../Components/Product/ProductTop";
import RelatedProduct from "../../Components/Product/RelatedProduct";
import useProducts from "../../Hooks/useProducts";
import useReviews from "../../Hooks/useReviews";
import { BaseUrl } from "../../Service/BaseUrl";

export default function ProductDetails({ product }) {
    const category = product.categories.split(', ');
    const { products } = useProducts();
    const { reviews } = useReviews();
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
            <DRContainer productRev={productRev}></DRContainer>
            <RelatedProduct related={catFilter}></RelatedProduct>
        </div>
    )
}
// define all dynamic path
export async function getStaticPaths() {
    const res = await axios.get(`${BaseUrl}/products`);
    const products = await res.data;
    const paths = products?.map(product => {
        return {
            params: { productId: product._id }
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
    const res = await axios(`${BaseUrl}/products`);
    const products = await res.data;
    const product = products?.find(p => p._id === id);
    return {
        props: { product }
    }
}