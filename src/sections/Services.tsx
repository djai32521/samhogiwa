import React from 'react';
import { motion } from 'framer-motion';
import { Home, Droplets, Hammer, ShieldCheck, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: <Home size={32} />,
        title: "한식 기와 시공",
        desc: "전통 한옥의 미를 현대적으로 재해석한 기와 시공",
        image: "0b45e7a50421edc4772dea1f17ccfccd142328.jpg"
    },
    {
        icon: <Droplets size={32} />,
        title: "지붕 누수/방수",
        desc: "첨단 진단기를 활용한 완벽한 원인 파악 및 방수",
        image: "50235beb04a3cb8afa234df098bb7274143929.jpg"
    },
    {
        icon: <Hammer size={32} />,
        title: "지붕 개량/보수",
        desc: "칼라강판, 특수 자재를 이용한 현대식 지붕 보수",
        image: "60c1fe6bc29fa55c7604807b7ab0cfdd142214.jpg"
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "철거 및 원상복구",
        desc: "전문 인력을 통한 안전한 지붕 철거 및 구조물 정리",
        image: "119c21c9af79e4215cf176c612d9577e142004.jpg"
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-[#fcfaf8]">
            <div className="container px-4">
                <div className="section-title">
                    <span className="text-[#c4a484] font-bold">BUSINESS GUIDE</span>
                    <h2 className="block mt-2">주요 사업 안내</h2>
                    <p>전문적인 기술력으로 최상의 지붕 환경을 선사합니다.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={`/gallery_images/${service.image}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3427]/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white p-3 bg-[#c4a484] rounded-2xl">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500 mb-6">{service.desc}</p>
                                <button className="text-[#4a3427] font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                                    자세히 보기 <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <img
                        src="/gallery_images/ff4a0f68766f78e2ca8e79d0992d5ac0141737.png"
                        className="w-full rounded-3xl shadow-lg"
                        alt="Business Info Detail"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
