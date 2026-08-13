import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from "../components/Timeline.jsx";
import Hobby from "../components/Hobby.jsx";
import Gallery from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";
import TechStack from "../components/TechStack.jsx";

const Home = () => {
    return (
        <main className="relative w-full">
            <div className="relative flex flex-col">
                <Hero />
                <About />
                <TechStack />
                <Timeline />
                <Hobby />
                <Gallery />
                <Footer />
            </div>
        </main>
    );
};

export default Home;

