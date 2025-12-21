import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileQuickBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full md:hidden flex z-50">
            <a href="tel:01052763628" className="flex-1 bg-[#4a3427] text-white py-4 flex items-center justify-center gap-2 font-bold">
                <Phone size={20} /> 전화상담
            </a>
            <a href="sms:01052763628" className="flex-1 bg-[#c4a484] text-white py-4 flex items-center justify-center gap-2 font-bold border-l border-white/10">
                <MessageSquare size={20} /> 문자문의
            </a>
        </div>
    );
};

export default MobileQuickBar;
