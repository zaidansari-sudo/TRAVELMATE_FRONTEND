import { Suspense } from "react";
import ThankYou from "@/components/Thankyou/Thankyou";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Page = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <ThankYou />
            </Suspense>
            <Footer />
        </div>
    );
};

export default Page;