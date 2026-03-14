import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PackageDetails from "@/components/Package/slug";
const Page = () => {
    return (
        <div> 
            <Navbar/>
            <PackageDetails/>
            <Footer/>
        </div>
    )
}
export default Page;