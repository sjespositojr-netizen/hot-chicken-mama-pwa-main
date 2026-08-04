import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const BANNERS = [
  {
    id: 1,
    src: "/photos/lineup-1.jpg",
    alt: "Hot Chicken Mama",
    title: "Nashville Roots | New York Hot Chicken",
    subtitle: "Hot Chicken Mama • Blue Point, NY",
    active: true,
  },
  {
    id: 2,
    src: "/photos/mac-cheese.jpg",
    alt: "Order Direct",
    title: "Skip the Third-Party Fees",
    subtitle: "Order directly through our app - Click 'Order Now' and select 'Delivery' at checkout!",
    active: true,
  },
  {
    id: 3,
    src: "/photos/drive-thru.jpg",
    alt: "Drive-Thru",
    title: "Drive-Up Pickup Window!",
    subtitle: "Order online, pick up at the window!",
    active: true,
  },
  {
    id: 4,
    src: "/photos/drive-thru.jpg",
    alt: "Drive-Thru",
    title: "Drive-Up Pickup Window!",
    subtitle: "Order online | Pick up at the window!",
    active: false,
  },
  {
    id: 5,
    src: "/photos/drive-thru.jpg",
    alt: "Drive-Thru",
    title: "Drive-Up Pickup Window!",
    subtitle: "Order online | Pick up at the window!",
    active: false,
  },
  {
    id: 6,
    src: "/photos/drive-thru.jpg",
    alt: "Drive-Thru",
    title: "Drive-Up Pickup Window!",
    subtitle: "Order online | Pick up at the window!",
    active: false,
  },
];

export function Hero() {
  const activeBanners = BANNERS.filter((banner) => banner.active);

  return (
    <section id="home" className="mx-auto mt-6 max-w-xl px-5">
<div className="overflow-hidden rounded-3xl border border-white/10 [&_.swiper-pagination-bullet]:!bg-white/50 [&_.swiper-pagination-bullet-active]:!bg-amber-500 [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-full">        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={activeBanners.length > 1}
          className="w-full"
        >
          {activeBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              {/* Relative container ensures text sits on top of THIS image */}
              <div className="relative h-[250px] w-full">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover"
                />
                
                {/* Dark gradient to make text readable on any background */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                
                {/* Text specific to this banner card */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="text-2xl font-bold leading-tight text-foreground">
                    {banner.title}
                  </h2>
                  <p className="mt-1 text-sm text-amber-500 font-semibold">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
