"use client";

import { ArrowRight } from "lucide-react";

import React from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface StatsCardProps {
    id: number;
    number: string;
    description: string;
}

const SearchSection: React.FC = () => {
    const statsData = [
        { id: 1, number: "60K+", description: "Ứng viên đã tìm việc" },
        { id: 2, number: "1,200", description: "Việc làm mỗi nhật" },
        { id: 3, number: "95%", description: "Tỷ lệ thành công" },
        { id: 4, number: "60K+", description: "Ứng viên đã tìm việc" },
        { id: 5, number: "1,200", description: "Việc làm mỗi nhật" },
    ];
    const StatsCard = ({ card }: { card: StatsCardProps }) => {
        return (
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100 w-[200px] h-[200px] ml-[15px] mr-[15px]">
                <div className="flex flex-col items-center text-center h-full justify-center">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <ArrowRight className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{card.number}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{card.description}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full mx-auto py-16 bg-[#FBE4B2] min-h-[700px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Banner */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#FFD09B] rounded-full px-8 py-3">
                        <p className="text-lg font-bold text-gray-800">
                            Tìm việc làm nhanh, việc làm mới trên toàn quốc
                        </p>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-6">
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                        Tiếp cận{' '}
                        <span className="text-5xl font-bold bg-gradient-to-r from-[#CD6D00] via-[#CD6D00] to-[#FF0000] bg-clip-text text-transparent">
                            60,000+
                        </span>{' '}
                        cơ hội việc làm từ hàng nghìn doanh nghiệp tại Việt Nam
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="text-center mb-8">
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                        Tìm việc làm nhanh, việc làm mới nhất từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-8 mb-12">
                    <Button
                        size="lg"
                        className="bg-[#DA5D1A] hover:bg-[#C54A0F] text-white px-12 py-5 text-2xl font-black h-16 min-w-[400px]"
                        style={{
                            backgroundColor: '#DA5D1A',
                            borderRadius: '999px',
                            fontWeight: 900,
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Link href="/login" className="flex items-center gap-3">
                            KHAM PHA NGAY TAI CV KING
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 hover:text-black px-8 py-5 text-2xl font-black h-16 min-w-[250px] border-2 border-gray-200"
                        style={{
                            borderRadius: '999px',
                            backgroundColor: 'white',
                            color: 'black',
                            fontWeight: 900,
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Link href="#">
                            TAO CV MIEN PHI
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {statsData.map((card) => (
                        <StatsCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
