import { useEffect, useState } from "react";
import DRContainer from "../../Components/Product/DRContainer";
import ProductTop from "../../Components/Product/ProductTop";
import RelatedProduct from "../../Components/Product/RelatedProduct";
import useProducts from "../../Hooks/useProducts";

export default function ProductDetails({ product }) {
    const category = product.categories.split(', ');
    const { products } = useProducts();
    const catFilter = products?.filter(p => p.categories.includes(category[2] || category[0]));
    const gallary = catFilter.map(p => p.img);
    return (
        <div className="cus-container my-32">
            <ProductTop product={product} gallary={gallary}></ProductTop>
            <DRContainer></DRContainer>
            <RelatedProduct></RelatedProduct>
        </div>
    )
}
// define all dynamic path
export async function getStaticPaths() {
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
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
    const res = await fetch('https://desolate-brushlands-14140.herokuapp.com/products');
    const products = await res.json();
    const product = products?.find(p => p._id === id);
    return {
        props: { product }
    }
}