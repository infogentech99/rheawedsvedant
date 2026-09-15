"use client";
// import MarriageCountdown from "./components/MarriageCountdown";
import CoupleMessage from "./components/CoupleMessage";
import { useEffect, useState, useRef, useMemo } from "react";

export default function Home() {
  const events = [
    {
      title_ceremony: "Musical Soirée",
      image: "/assets/musical.webp",
      date: "Wednesday, October 28th 2026",
      venue: "The Central Park Hotel",
      venue_address: (
        <>
          Celebrations Sports Club, Banquet Hall, <br /> Lokhandwala Complex Rd,
          Andheri W - 400053
        </>
      ),
      time: "Join Us at 07:00 PM Onwards",
      link: "https://maps.app.goo.gl/xTJNNFMQJL4RunQw9",
    },

    {
      title_ceremony: "Rang-e-Mehndi",
      image: "/assets/mehandi.webp",
      date: "Thursday, October 29th 2026",
      venue: "The Central Park Hotel",
      venue_address: (
        <>
          Mars A/702, Vasant Galaxy, Bangur Nagar,
          <br /> Goregaon W - 400104
        </>
      ),
      time: "Join Us at 03:00 PM Onwards",
      link: "https://maps.app.goo.gl/a9VUbZpPrKCWrjy4A",
    },
    {
      title_ceremony: "The Scared Promise",
      image: "/assets/scared.webp",
      date: "Sunday, November 1st 2026",
      venue: "The Central Park Hotel",
      venue_address: (
        <>
          Champagne Ballroom of Novotel Hotel,
          <br /> Balraj Sahni Marg, Juhu Beach, Mumbai - 400049
        </>
      ),
      time: "Join Us at 02:30 PM Onwards",
      link: "https://maps.app.goo.gl/QLJvPyZLZHhhmfKm7",
    },
    {
      title_ceremony: "Grand Soirée",
      image: "/assets/grand.webp",
      date: "Sunday, November 1st 2026",
      venue: "The Central Park Hotel",
      venue_address: (
        <>
          Poolside Novotel Hotel, Balraj <br /> Sahni Marg, Juhu Beach, Mumbai -
          400049
        </>
      ),
      time: "Join Us at 07:30 PM Onwards",
      link: "https://maps.app.goo.gl/QLJvPyZLZHhhmfKm7",
    },
  ];

  // const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [started, setStarted] = useState(false);
  // const [playing, setPlaying] = useState(false);

  // const startMusic = async () => {
  //   const audio = audioRef.current;
  //   if (!audio || started) return;

  //   try {
  //     audio.volume = 0.3;
  //     await audio.play();
  //     setStarted(true);
  //     setPlaying(true);
  //   } catch { }
  // };

  // const toggleMusic = async () => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   if (playing) {
  //     audio.pause();
  //     setPlaying(false);
  //   } else {
  //     try {
  //       await audio.play();
  //       setPlaying(true);
  //     } catch { }
  //   }
  // };

  // // First user interaction (mobile + desktop)
  // useEffect(() => {
  //   const handler = () => startMusic();

  //   window.addEventListener("click", handler);
  //   window.addEventListener("touchstart", handler);

  //   return () => {
  //     window.removeEventListener("click", handler);
  //     window.removeEventListener("touchstart", handler);
  //   };
  // }, [started]);

  return (
    <div>
      {/* <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song_rohit.mp3" loop preload="auto" playsInline /> */}

      <div
        className="bg-[url('/assets/rhea_mobilebg4.webp')]
   md:bg-[url('/assets/rhea_desktopbg.webp')]
    bg-cover
    bg-top
    bg-no-repeat
    min-h-screen
    w-full
    relative
    overflow-hidden
  "
      >
        {/* <FallingLamps /> */}

        <div className=" md:pt-24 pt-0 md:pb-50 lg:pb-40 relative z-10 pb-24">
          <div className=" text-center leading-tight text-[32px] sm:text-5xl lg:text-[100px] lg:pb-370 3xl:pb-500 md:pb-470 gap-y-2 pb-30">
            <h2 className="text-[#004F8D]  font-parisienne [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] font-medium font-playfair-display italic md:mt-55 mt-15">
              RHEA Weds VEDANT
            </h2>
          </div>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-250 pt-130 md:pt-0">
            <h2 className="text-[#0071CC] md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>
            <img
              src="/assets/swastik.png"
              alt="ganesh"
              className="md:w-40 w-28 h-auto"
            />

            <h2 className="text-[#0071CC] md:text-xl text-[12px] text-center font-eb-garamond">
              In the gentle presence of love and blessings that continue to
              guide us from above... <br />
              Late Smt. Especiosa Sumantha & Late Shri Edwin Sumantha <br />
              Smt. Vidya Hegde & Late Shri Harishchandra Hegde
            </h2>
            <hr className="w-20 h-3 text-[#0071CC]" />

            <h2 className="text-[#0071CC] md:text-xl text-[17px] font-eb-garamond">
              Hegde, Saple & Sathe Families
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2
              className="text-[#0071CC] font-playfair-display
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider"
            >
              INVITES
            </h2>

            <p className="text-[#0071CC] font-eb-garamond md:text-xl text-[17px] mt-6">
              you to join us in the wedding celebrations of
            </p>

            <h2
              className="text-[#0071CC] font-playfair-display text-center mt-14
            md:text-5xl text-[64px] lg:text-[100px] leading-tight"
            >
              Vedant Shah
            </h2>

            <p className="text-[#0071CC] font-eb-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              S/O
              <br />
              Arati Shah and Amit Shah
            </p>

            <h2
              className="text-[#0071CC] font-playfair-display text-center mt-4
            text-[64px] sm:text-7xl lg:text-[100px] leading-tight"
            >
              <span
                className="text-[#0071CC] font-playfair-display text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight"
              >
                &
              </span>{" "}
              <br />
              Rhea Hegde
            </h2>

            <p className="text-[#0071CC] font-eb-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              D/O
              <br />
              Ruby Hegde and Kishore Hegde
            </p>

            <p className="text-[#0071CC] font-eb-garamond md:text-2xl text-[17px] mt-8 ">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-16 lg:gap-x-40 gap-y-20">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 lg-w-95 sm:w-76 h-auto w-70 "
                  />

                  <h2 className="text-[#0071CC] font-playfair-display lg:text-[45px] md:text-2xl text-[37px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-[#0071CC] font-playfair-display text-[14px] sm:text-base mt-2">
                    <span className="md:text-[22px] text-[18px]">{event.date}</span> <br />
                    <span className="md:text-[22px] text-[18px]"> {event.time} </span>
                  </p>

                  <p className="text-[#0071CC] font-playfair-display text-[14px] sm:text-base">
                    <span className="md:text-[22px] text-[18px]">{event.venue_address}</span>
                  </p>
                  <p className="text-[#0071CC] font-playfair-display text-[14px] sm:text-base mt-2">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:text-[20px] text-[18px] underline"
                    >
                      View Direction
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/hinge_couple_mobile.png')] md:bg-[url('/assets/hinge_couple.webp')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center h-180 md:h-176 lg:h-450 3xl:h-503">
          <img
            src="/assets/hinge.png"
            alt="icon"
            className="w-20 h-10 lg:w-50 lg:h-20 lg:mt-20 3xl:mt-30 mt-5"
          />
          <h2 className="font-playfair-display font-medium italic text-2xl md:text-4xl lg:text-6xl  3xl:text-7xl text-center  text-[#FFCB99] md:mt-10">
            It Started With a Match
          </h2>
          <div className="flex gap-2">
            <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#FFCB99]" />
            <img
              src="/assets/icon.png"
              alt="icon"
              className="w-5 h-5 lg:w-6 lg:h-6 lg:mt-3"
            />
            <hr className="w-10 lg:w-20 md:border my-3 lg:my-6 border-[#FFCB99]" />
          </div>
          <h2 className="font-eb-garamond font-medium text-xs md:text-2xl lg:text-[28px] 3xl:text-3xl text-center leading-3 md:leading-5 lg:leading-9 pt-3 md:pt-2 lg:pt-2 text-white md:px-0 px-4">
            {/* Thank you for being part of our journey. <br /> Your presence makes this celebration truly <br /> 
                   meaningful, and we look forward to sharing <br /> these cherished moments with you. */}
            In a world full of beautiful stories, ours began in 2023...
            <br/> <br />
            Where the serene shores of the South met the golden coasts of the
            West,
            <br />
            two hearts found their rhythm, two souls found their rest. <br />
            <br />
            From different horizons, woven by love and rooted in values, our
            families became one.
          </h2>
        </div>
      </div>
      <CoupleMessage />

      {/* <MarriageCountdown /> */}
    </div>
  );
}
