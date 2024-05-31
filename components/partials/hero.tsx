'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import BaseLink from "../commons/base-link";

const Hero = () => {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="container flex justify-between px-20 py-10">
                    <div className="flex-1 space-y-5">
                        <p className="text-[#9CA3AF]">#SpiritOfLearning</p>
                        <p className="text-6xl font-bold">High <span className="text-[#F99B37]"> Quality</span> Sustainable Growth<span className="text-[#F99B37]">.</span></p>
                        <p className="text-[#625B71]">Tingkatkan Keterampilan Karyawan Anda dengan Materi Pembelajaran Terpercaya yang Disediakan oleh Smart Education, Portal Inovatif yang Menghadirkan Kesetaraan Kompetensi dan Efisiensi Kerja di Tempat Kerja.</p>
                        <div>
                            <BaseLink href="/" label="Browse Course" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <Image src="/img/Rectangle-2.png" width={450} height={50} alt="Rectangle-2" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Page 2</SwiperSlide>
            <SwiperSlide>Page 3</SwiperSlide>
        </Swiper>
    );
}

export default Hero;