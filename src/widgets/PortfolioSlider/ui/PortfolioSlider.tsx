"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ProjectCard, type Project } from "@/entities/project";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./PortfolioSlider.module.scss";

interface PortfolioSliderProps {
  projects: Project[];
}

export const PortfolioSlider = ({ projects }: PortfolioSliderProps) => {
  const [_, setInit] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>PORTFOLIO</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          onInit={() => setInit(true)}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
          loop={true}
          className={styles.slider}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className={styles.slide}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navigation}>
          <button className={`${styles.buttonIcon} swiper-button-prev-custom`}>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={14}
              height={14}
              className={styles.arrowIconLeft}
            />
          </button>

          <button className={`${styles.buttonIcon} swiper-button-next-custom`}>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={14}
              height={14}
              className={styles.arrowIconRight}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
