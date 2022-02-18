import Head from "next/head";
import ContactInfo from "../Components/Contact/ContactInfo";
import TopBanner from "../Shared/TopBanner";

export default function ContactUs() {
    return(
        <>
           <Head>
               <title>Kino | Contact US</title>
           </Head>
           <main>
                <TopBanner name='Contact Us' route='Contact Us'></TopBanner>
                <ContactInfo></ContactInfo>
           </main>
        </>
    )
}