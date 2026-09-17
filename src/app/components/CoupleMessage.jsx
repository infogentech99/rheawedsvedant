import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { CalendarPlus, Bell } from "lucide-react";

export default function CoupleMessage() {
  const TARGET_DATE = new Date("2026-11-01").getTime();
  <Bell />;
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = [
    {
      img: "/assets/shiv_couple1.webp",
    },

    {
      img: "/assets/shiv_couple2.webp",
    },

    {
      img: "/assets/shiv_couple4.webp",
    },

    {
      img: "/assets/shiv_couple5.webp",
    },

    {
      img: "/assets/shiv_couple6.webp",
    },
    {
      img: "/assets/shiv_couple3.webp",
    },
  ];

  return (
    <div className="bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center h-765 md:h-1350 lg:h-1450 3xl:h-1600">
        {/* <h2
          className="font-playfair-display font-medium italic text-4xl md:text-3xl text-center 
                               leading-7 md:leading-8 lg:leading-8 text-[#D49900] ml-300 mt-16"
        >
          Introducing The Couple
        </h2>
        */}




{/* 
<img
          src="/assets/animation.gif"
          alt="icon"
          className="w-full h-full lg:w-full lg:h-full md:mt-30"
         
        />  */}

<video
  src="/assets/template-animation2.webm"
  autoPlay
  muted
  playsInline
  className="w-full h-full lg:w-full lg:h-full md:mt-30"
/>

        <h2
          className="font-playfair-display font-medium italic text-4xl md:text-6xl text-center 
                               mt-23 md:mt-16 lg:mt-60 leading-7 md:leading-8 lg:leading-8 text-[#D49900]"
        >
          Introducing The Couple
        </h2>
        <div className="flex gap-2 mt-6 md:mt-8 lg:mt-12">
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
          <img
            src="/assets/icon2.png"
            alt="icon"
            className="w-5 h-5 lg:w-6 lg:h-6 md:mt-3"
          />
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
        </div>
        <div className="flex gap-2 md:mt-30 mt-16 md:px-2 pr-2">
          <div>
             <img
              src="/assets/couple_1.webp"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-75
      md:w-150
      md:h-145
      lg:w-70
      lg:h-110
      mt-2
      md:mt-4
      lg:mt-0
      object-contain md:block hidden
    "
            />
             <img
              src="/assets/couple_mobile_1.webp"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-60
      md:w-150
      md:h-145
      lg:w-70
      lg:h-110
      mt-2
      md:mt-4
      lg:mt-0
      object-contain
      md:hidden block
    "
            />
    
            
            <img
              src="/assets/couple_2.png"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-40
      md:w-150
      md:h-145
      lg:w-70
      lg:h-60
      mt-3
      md:mt-4
      lg:mt-3 
      object-contain md:block hidden
    "
            />



             <img
              src="/assets/couple_mobile_2.webp"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-36
      md:w-150
      md:h-145
      lg:w-70
      lg:h-60
      mt-2
      md:mt-4
      lg:mt-3
      object-contain md:hidden block
    "
            />
            <div className="flex justify-center">
              <h2
                className="font-playfair-display font-medium italic text-[16px] md:text-xl
                              mt-2 md:mt-4 text-[#D49900]"
              >
                And in the end, <br /> all that matters is love.
              </h2>
            </div>
          </div>
          <div>
            <img
              src="/assets/happy.png"
              alt="couple_img"
              className="relative z-10 pointer-events-none w-60 h-20 -mt-6 lg:ml-20 object-contain"
            />
            <img
              src="/assets/couple_4.webp"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-65
      md:w-150
      md:h-145
      lg:w-70
      lg:h-90
     
    "
            />
            <img
              src="/assets/couple_3.webp"
              alt="couple_img"
              className="
      relative
      z-10
      pointer-events-none
      w-100
      h-60
      md:w-150
      md:h-145
      lg:w-70
      lg:h-90
      md:mt-3 mt-2
      object-contain
    "
            />
          </div>
        </div>

        <h2
          className="font-playfair-display font-medium italic text-3xl md:text-5xl lg:text-[100px] text-center pt-20
                               md:pt-30 lg:pt-35 text-[#D49900]"
        >
          Good To Know
        </h2>
        <div className="flex gap-2 mt-6 md:mt-8 lg:mt-12">
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
          <img
            src="/assets/icon2.png"
            alt="icon"
            className="w-5 h-5 lg:w-6 lg:h-6 md:mt-3"
          />
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
        </div>

        <div className="flex justify-center mt-10 md:mt-20 pb-15 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-0">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/varmala.png"
                alt="weather"
                className="h-40 w-55 md:w-25 md:h-20 lg:w-[70%] lg:h-[70%]"
              />
              <h2 className="font-playfair-display font-semibold text-xl md:text-xl lg:text-4xl mt-8 text-[#D49900]">
                Varmala
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-4 md:leading-6 text-[#D49900] px-4">
                Varmala at 2:45pm will happen at Poolside but the rest of the
                wedding <br className="md:block hidden"/>
                rituals will happen in the Champagne Ballroom from 3:30pm
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/parking.png"
                alt="parking"
                className="h-40 w-55 md:w-25 md:h-20 lg:w-[70%] lg:h-[70%]"
              />
              <h2 className="font-playfair-display font-semibold text-xl md:text-xl lg:text-4xl mt-8 text-[#D49900]">
                Parking
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-4 md:leading-6 text-[#D49900]">
                Valet parking for all our guests will be available at the venue,{" "}
                <br />
                ensuring a smooth and hassle-free arrival.
              </p>
            </div>
          </div>
        </div>
        <h2
          className="font-playfair-display font-medium italic text-3xl md:text-5xl lg:text-[100px] text-center pt-15 
                               md:pt-30 lg:pt-35 text-[#D49900]"
        >
          The Countdown
        </h2>
        <div className="flex gap-2 mt-6 md:mt-8 lg:mt-12">
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
          <img
            src="/assets/icon2.png"
            alt="icon"
            className="w-5 h-5 lg:w-6 lg:h-6 md:mt-3"
          />
          <hr className="w-10 lg:w-20 md:border my-3 md:my-6 border-[#D49900]" />
        </div>
        <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-2xl mt-4 md:leading-6 text-[#D49900] italic">
          To Forever Begins
        </p>
        <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-4 md:leading-6 text-[#D49900] italic px-6 text-center">
          With Heartfelt Blessings & Warmest Wishes Our Family request the
          honour of your presence to bless this sacred union of love and destiny
        </p>

        <div className="flex flex-col items-center h-80 md:h-100 lg:h-110 md:gap-2">
          <div className="flex md:gap-10 gap-2 mt-6 md:mt-20">
            <div
              className="flex h-[100px] w-[80px] flex-col items-center justify-center bg-[url('/assets/count_bg.png')] bg-contain bg-center bg-no-repeat 
            font-playfair-display text-center text-xl font-medium text-[#D49900] md:h-[150px] md:w-[150px]
             md:text-3xl lg:h-[180px] lg:w-[280px] lg:text-[52px]"
            >
              {timeLeft.days}

              <p className="font-eb-garamond text-[10px] font-medium md:text-sm lg:text-base">
                DAYS
              </p>
            </div>

            <div
              className="flex h-[100px] w-[80px] flex-col items-center justify-center bg-[url('/assets/count_bg.png')] bg-contain bg-center bg-no-repeat 
            font-playfair-display text-center text-xl font-medium text-[#D49900] md:h-[150px] md:w-[150px]
             md:text-3xl lg:h-[180px] lg:w-[280px] lg:text-[52px]"
            >
              {timeLeft.hours}

              <p className="font-eb-garamond text-[10px] font-medium md:text-sm lg:text-base">
                HOURS
              </p>
            </div>

            <div
              className="flex h-[100px] w-[80px] flex-col items-center justify-center bg-[url('/assets/count_bg.png')] bg-contain bg-center bg-no-repeat 
            font-playfair-display text-center text-xl font-medium text-[#D49900] md:h-[150px] md:w-[150px]
             md:text-3xl lg:h-[180px] lg:w-[280px] lg:text-[52px]"
            >
              {timeLeft.minutes}

              <p className="font-eb-garamond text-[10px] font-medium md:text-sm lg:text-base">
                MINUTES
              </p>
            </div>

            <div
              className="flex h-[100px] w-[80px] flex-col items-center justify-center bg-[url('/assets/count_bg.png')] bg-contain bg-center bg-no-repeat 
            font-playfair-display text-center text-xl font-medium text-[#D49900] md:h-[150px] md:w-[150px]
             md:text-3xl lg:h-[180px] lg:w-[280px] lg:text-[52px]"
            >
              {timeLeft.seconds}

              <p className="font-eb-garamond text-[10px] font-medium md:text-sm lg:text-base">
                SECONDS
              </p>
            </div>
          </div>

          <div className="flex md:gap-10 gap-4 md:mt-24 mt-10">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D49900] px-5 py-2 font-eb-garamond uppercase md:text-[14px] text-[12px]"
            >
              <CalendarPlus size={18} />
              Add to Calendar
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 gap-2 border-[#D1C5B5CC] bg-white  text-[#241915] rounded-lg uppercase font-eb-garamond font-medium  md:text-[14px] text-[12px]"
            >
              <Bell size={18} /> Event Iternary
            </a>
          </div>

          <img
            src="/assets/heart.png"
            alt="heart"
            className="w-7 h-7 lg:w-7 lg:h-7 mt-13"
          />
          <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-[28px] text-center mt-4 px-6 md:px-0 text-[#D49900]">
            A Special Tail-Wagging Welcome from Google Hegde
          </p>
          <div className="flex gap-3 justify-center items-center mt-4">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src="/assets/insta.png"
                alt="instagram"
                className="w-7 h-6 md:w-10 md:h-10 lg:w-5.5 lg:h-5.5 mt-4"
              />
            </a>
            <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-lg text-center mt-4 text-[#D49900]">
              <a href="https://invitearc.com/" target="_blank">
                Follow InviteArc on Instagram
              </a>
            </p>
          </div>
        </div>
        <img
          src="/assets/hotel.webp"
          alt="icon"
          className="lg:w-full lg:h-full object-contain md:mt-80 mt-40"
        />
      </div>
    </div>
  );
}
