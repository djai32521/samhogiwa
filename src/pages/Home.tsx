import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import MobileQuickBar from '../components/MobileQuickBar';

const Home: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen">
            <Navbar
                isScrolled={isScrolled}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollTo={(id) => {
                    if (id === 'home' || id === 'about' || id === 'services' || id === 'gallery' || id === 'contact') {
                        scrollTo(id);
                    }
                }}
            />
            <Hero scrollTo={scrollTo} />
            <About />
            <Services />
            <Gallery />
            <Contact />
            <Footer scrollTo={scrollTo} />
            <MobileQuickBar />
        </div>
    );
};

export default Home;
