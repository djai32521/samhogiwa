import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-[#4a3427] text-white">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl serif font-bold mb-8">무료 견적 상담 및 예약</h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            24시간 언제든 친절하게 상담해 드립니다.<br />
                            정확한 견적을 위해 현장 방문 및 상세 상담이 가능합니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#c4a484]">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">상담 전화</p>
                                    <a href="tel:01052763628" className="text-2xl font-bold hover:text-[#c4a484]">010-5276-3628</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#c4a484]">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">시공 지역</p>
                                    <p className="text-2xl font-bold">전국 어디든 시공 가능</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#c4a484]">
                                    <Calendar size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">운영 시간</p>
                                    <p className="text-2xl font-bold">연중무휴 24시간 상담 가능</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 text-[#333]"
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare className="text-[#c4a484]" /> 간편 견적 요청
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500">성함</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c4a484] outline-none transition-all" placeholder="장동건" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500">연락처</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c4a484] outline-none transition-all" placeholder="010-0000-0000" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500">시공 지역</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c4a484] outline-none transition-all" placeholder="예) 전남 화순, 경기 광주 등" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500">문의 내용</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c4a484] outline-none transition-all" placeholder="기와 시공 견적 문의드립니다."></textarea>
                            </div>
                            <button className="w-full bg-[#4a3427] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#6d5141] transition-all">
                                견적 문의 보내기
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
