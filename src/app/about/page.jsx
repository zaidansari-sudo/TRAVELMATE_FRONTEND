import About from "@/components/About/About";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyUs from "@/components/About/Whyus";


const Page = () => {
    return (
        <div>
            <Navbar/>
            <About/>
            <WhyUs/>
            <Footer/>
        </div>
    )
}
export default Page 