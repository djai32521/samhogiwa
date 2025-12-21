import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { navItems } from '../constants';

interface NavbarProps {
    isScrolled: boolean;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    scrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMenuOpen, setIsMenuOpen, scrollTo }) => {
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'nav-gradient py-6'}`}>
            <div className="container px-4 flex justify-between items-center">
                <div
                    className={`text-2xl font-bold serif cursor-pointer flex items-center gap-2 ${isScrolled ? 'text-[#4a3427]' : 'text-white'}`}
                    onClick={() => scrollTo('home')}
                >
                    <div className="w-10 h-10 bg-[#4a3427] rounded-lg flex items-center justify-center text-white text-sm">삼호</div>
                    <span>삼호건축기와</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`text-lg font-medium hover:text-[#c4a484] transition-colors ${isScrolled ? 'text-[#333]' : 'text-white'}`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <a
                        href="tel:01052763628"
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-lg font-bold transition-all ${isScrolled ? 'bg-[#4a3427] text-white hover:bg-[#6d5141]' : 'bg-white text-[#4a3427] hover:bg-gray-100'}`}
                    >
                        <Phone size={20} />
                        010-5276-3628
                    </a>
                </div>

                <button className={`md:hidden ${isScrolled ? 'text-[#333]' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
