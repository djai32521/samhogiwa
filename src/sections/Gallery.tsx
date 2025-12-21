import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { galleryImages } from '../constants';

const Gallery: React.FC = () => {
    const previewImages = galleryImages.slice(0, 8);

    return (
        <section id="gallery" className="bg-white">
            <div className="container px-4">
                <div className="section-title">
                    <span className="text-[#c4a484] font-bold">PORTFOLIO</span>
                    <h2 className="block mt-2">시공 갤러리</h2>
                    <p>삼호건축기와의 최근 시공 사례입니다.</p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
                    {previewImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
                        >
                            <img
                                src={`/gallery_images/${img}`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                alt={`Gallery Preview ${idx}`}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white border border-white px-4 py-2 rounded-full text-sm">자세히 보기</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-2 bg-[#4a3427] text-white px-10 py-4 rounded-full font-bold hover:bg-[#6d5141] transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                        전체 시공 사례 보기 (총 {galleryImages.length}개)
                        <ExternalLink size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
