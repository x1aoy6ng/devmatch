import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Partners from "../Partners";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import BackToTopButton from "../BackToTop";

function Home (){
    return (
        <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Partners />
        <Subscribe />
        <Footer />
        <BackToTopButton />
        </>
    );
}

export default Home