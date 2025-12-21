import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../constants';
import Footer from '../components/Footer';

const FullGalleryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header for Gallery Page */}
            <nav className="glass py-4 fixed top-0 left-0 w-full z-50">
                <div className="container px-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold serif text-[#4a3427] flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#4a3427] rounded-lg flex items-center justify-center text-white text-sm">삼호</div>
                        <span>삼호건축기와</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-[#4a3427] text-white rounded-full font-bold hover:bg-[#6d5141] transition-all">
                        <Home size={18} />
                        메인으로
                    </Link>
                </div>
            </nav>

            <section className="pt-32 pb-20">
                <div className="container px-4">
                    <div className="section-title">
                        <span className="text-[#c4a484] font-bold">ALL PROJECTS</span>
                        <h2 className="block mt-2">전체 시공 갤러리</h2>
                        <p>삼호건축기와의 모든 시공 사례를 확인하실 수 있습니다. ({galleryImages.length}개)</p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
                            >
                                <img
                                    src={`/gallery_images/${img}`}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt={`Gallery Full ${idx}`}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white border border-white px-4 py-2 rounded-full text-sm">크게 보기</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-[#4a3427] font-bold hover:gap-4 transition-all">
                            <ChevronLeft size={24} /> 메인 페이지로 돌아가기
                        </Link>
                    </div>
                </div>
            </section>

            <Footer scrollTo={() => { }} />
        </div>
    );
};

export default FullGalleryPage;
