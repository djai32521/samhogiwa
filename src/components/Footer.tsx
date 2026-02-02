import React from 'react';

interface FooterProps {
    scrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
    return (
        <footer className="bg-[#fcfaf8] py-20 border-t border-gray-100">
            <div className="container px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="col-span-2">
                        <div className="text-2xl font-bold serif text-[#4a3427] mb-6 flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#4a3427] rounded text-white flex items-center justify-center text-xs">삼호</div>
                            삼호건축기와
                        </div>
                        <p className="text-gray-500 max-w-md mb-8">
                            전통의 미와 현대의 기술을 접목하여 가장 안전하고 아름다운 지붕을 만듭니다.
                            40년 한길만 걸어온 장인의 고집으로 고객님의 신뢰에 보답하겠습니다.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#4a3427] hover:border-[#4a3427] transition-all">FB</a>
                            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#4a3427] hover:border-[#4a3427] transition-all">Blog</a>
                            <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#4a3427] hover:border-[#4a3427] transition-all">YT</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">바로 가기</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><button onClick={() => scrollTo('about')} className="hover:text-[#4a3427]">회사 소개</button></li>
                            <li><button onClick={() => scrollTo('services')} className="hover:text-[#4a3427]">사업 안내</button></li>
                            <li><button onClick={() => scrollTo('gallery')} className="hover:text-[#4a3427]">시공 갤러리</button></li>
                            <li><button onClick={() => scrollTo('contact')} className="hover:text-[#4a3427]">문의하기</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">사업자 정보</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li>상호: 삼호건축기와</li>
                            <li>대표: 이병집</li>
                            <li>Tel: 010-5276-3628</li>
                            <li>Address: 전국 협의 시공</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>© 2025 삼호건축기와. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#333]">이용약관</a>
                        <a href="#" className="hover:text-[#333]">개인정보처리방침</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
