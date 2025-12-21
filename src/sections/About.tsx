import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-white">
            <div className="container px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/gallery_images/9bf89dc7f6b9a5d61d5d11ff003947cc141710.png"
                            className="rounded-2xl shadow-2xl relative z-10"
                            alt="Representative"
                        />
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#c4a484] rounded-2xl -z-0 opacity-20"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="section-title text-left mb-8">
                            <span className="text-[#c4a484] font-bold">인사말</span>
                            <h2 className="block mt-2">삼호건축기와</h2>
                        </div>
                        <p className="text-xl text-[#333] font-medium mb-6">
                            "40년의 세월, 수천 번의 망치질 속에 장인의 혼을 담았습니다."
                        </p>
                        <div className="space-y-4 text-gray-600">
                            <p>안녕하십니까? 삼호건축기와 홈페이지를 방문해 주셔서 감사합니다.</p>
                            <p>저희는 한식기와, 청기와, 오지기와 등 각종 전통기와 시공을 전문으로 하며,
                                축적된 노하우와 풍부한 현장 경험을 바탕으로 전국 어디든 달려갑니다.</p>
                            <p>지붕은 건물의 얼굴이자 가장 중요한 보호막입니다. 비가 새거나 단열이 안 되는 고민,
                                낡은 지붕으로 인한 불안감을 저희만의 특수 공법과 정직한 자재로 완벽하게 해결해 드리겠습니다.</p>
                            <p className="font-bold text-[#4a3427] pt-4 serif text-2xl">대표 임직원 일동</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#fcfaf8] rounded-full flex items-center justify-center text-[#c4a484]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">40년 경력</h4>
                                    <p className="text-sm text-gray-400">전통 시공 노하우</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#fcfaf8] rounded-full flex items-center justify-center text-[#c4a484]">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">책임 시공</h4>
                                    <p className="text-sm text-gray-400">철저한 사후 관리</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
