import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronRight } from 'lucide-react';
import { mainBanners } from '../constants';

interface HeroProps {
    scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden p-0">
            <div className="absolute inset-0 z-0">
                <img
                    src={`/gallery_images/${mainBanners[1]}`}
                    className="w-full h-full object-cover filter brightness-50"
                    alt="Main Banner"
                />
            </div>

            <div className="container relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-width-[800px]"
                >
                    <span className="inline-block px-4 py-1 bg-[#c4a484] text-white rounded-full text-sm font-bold mb-6">전통의 가치를 지키는 장인정신</span>
                    <h1 className="text-5xl md:text-7xl text-white font-bold serif leading-tight mb-6">
                        전통의 미와 현대의 기술이<br />
                        <span className="text-[#c4a484]">지붕의 완성</span>을 만듭니다.
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl">
                        한식그을림기와, 건식기와, 지붕누수공사 전문<br />
                        40년 경력의 장인이 책임지고 시공하여 대물림하는 지붕을 약속합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollTo('gallery')}
                            className="bg-[#c4a484] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#b08d6a] transition-all transform hover:-translate-y-1"
                        >
                            시공 갤러리 보기 <ChevronRight size={20} />
                        </button>
                        <a
                            href="tel:01052763628"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <Phone size={20} /> 실시간 무료 견적
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
                <div className="w-1 h-12 bg-white rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
