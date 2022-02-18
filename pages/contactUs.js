import Head from "next/head";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactMap from "../Components/Contact/ContactMap";
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
                <ContactMap></ContactMap>
                <ContactForm></ContactForm>
           </main>
        </>
    )
}