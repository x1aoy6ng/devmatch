import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Partners from "../Partners";

function Home (){
    return (
        <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Partners />
        </>
    );
}

export default Home