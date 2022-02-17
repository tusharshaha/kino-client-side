import Head from "next/head";
import TopBanner from "../Shared/TopBanner";
import cat1 from "../public/categories/f-10.png";
import cat2 from "../public/categories/f-09.png";
import cat3 from "../public/categories/p-09.png";
import cat4 from "../public/categories/p-01.png";
import cat5 from "../public/categories/f-15.png";
import cat6 from "../public/categories/f-02-1.png";
import cat7 from "../public/categories/f-07-1.png";
import cat8 from "../public/categories/p-05-1.png";
import cat9 from "../public/categories/f-08.png";
import cat10 from "../public/categories/f-13.png";
import Image from "next/image";
import Skeleton from "../Shared/Skeleton";

export default function Categories() {
    const categories = [
        { img: cat1, name: 'Accessories' },
        { img: cat2, name: 'Best Seller' },
        { img: cat3, name: 'Hand Gloves' },
        { img: cat4, name: 'Hand Sanitizer' },
        { img: cat5, name: 'Health & Medicine' },
        { img: cat6, name: 'Home Accessories' },
        { img: cat7, name: 'Medical Equipment' },
        { img: cat8, name: 'Popular' },
        { img: cat9, name: 'Pressure Meter' },
        { img: cat10, name: 'Top Rated' },
    ]
    return (
        <>
            <Head>
                <title>Kino | Categories</title>
            </Head>
            <main>
                {/* this is category top banner  */}
                <TopBanner name='Categories' route='Product Categories'></TopBanner>
                {/* this is category section  */}
                <div className="cus-container mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            categories.map((cat, i )=>
                            <div className="flex shadow-md rounded-md items-center justify-center gap-6 py-6 px-8" key={i}>
                                <Image src={cat.img} height={650} width={400} alt='category image'/>
                                <div>
                                    <h4>{cat.name}</h4>
                                    <p className="text-slate-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}