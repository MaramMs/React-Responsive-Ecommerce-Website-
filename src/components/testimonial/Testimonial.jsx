import React from "react";
import styles from "./Testimonail.module.css";
import hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";
const Testimonial = () => {
  return (
    <div className={styles.testimonail}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span>top rated</span>
          <span>
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </span>
        </div>
        <img src={hero} alt="" />
        <div className={styles.container}>
          <span>100 K</span>
          <span>HAPPY CUSTOMERS WITH US</span>
        </div>
      </div>

      <div className={styles.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={styles.tCarousel}
        >
          {TestimonialsData.map((person) => (
            <SwiperSlide>
              <div className={styles.testimonial}>
                <img src={person.image} alt="" />
                <span>{person.comment}</span>
                <hr />
                <span>{person.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
