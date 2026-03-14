import React  from "react";
import Package from "@/components/Package/package";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const Page = () => {
    return (
        <div>
            <Navbar/>
            <Package />
            <Footer/>
        </div>
    )
}
export default Page;