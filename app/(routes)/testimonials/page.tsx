"use client"
import { CoverParticles } from "@/components/cover-particles";
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '@/data';


import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh'>
                
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunas de Mis Certificaciones
                    <span className="block font-bold text-secondary"> para mejorar Mis Skills </span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                        >
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="200" height="200" className="mx-auto " />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;