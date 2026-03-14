import ThankYou from "@/components/Thankyou/Thankyou";
import React from "react"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Page = () => {
    return(
        <div>
            <Navbar/>
            <ThankYou />
            <Footer/>
        </div>
    )
}
export default Page