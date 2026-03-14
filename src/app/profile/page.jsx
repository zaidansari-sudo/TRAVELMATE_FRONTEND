import React from "react"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfilePage from "@/components/Profile/Profile";

const Page = () => {
    return (
        <div>
            <Navbar/>
            <ProfilePage/>
           <Footer/>
        </div>
    )
}
export default Page