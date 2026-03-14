import ContactPage from "@/components/Contact/Contact";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const Page = () => {
    return (
        <div>
            <Navbar/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}
export default Page