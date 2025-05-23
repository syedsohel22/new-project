"use client";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkHref: string;
}
// Reusable Card Component
const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkHref,
}: FeatureCardProps) => (
  <Link href={linkHref} className="block">
    <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-72 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <Image
        width={"100"}
        height={"100"}
        src={imageSrc}
        alt={title}
        className="w-24 h-24 mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Landing Section - Hero Banner and Carousel */}
      <section className="relative w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Example of a banner image/SVG background - replace with actual image if desired */}
          <Image
            width={"10"}
            height={"10"}
            src="/football-arena-bg.svg"
            alt="Football Arena Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-yellow-400">Football Arina</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Your ultimate platform to organize and manage your football world
              – tournaments, teams, players, and matches.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden mb-12">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  width={"100"}
                  height={"100"}
                  src="/action-shot.svg"
                  alt="Football Action"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-3xl font-bold">
                  Thrilling Action
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={"100"}
                  height={"100"}
                  src="/team-huddle.svg"
                  alt="Team Huddle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-3xl font-bold">
                  Team Spirit
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={"100"}
                  height={"100"}
                  src="/trophies.svg"
                  alt="Trophies"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-3xl font-bold">
                  Victory Awaits
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Match Info Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Upcoming Matches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Match Card 1 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between border-l-4 border-blue-500">
                <div className="flex items-center">
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-a-logo.svg"
                    alt="Team A Logo"
                    className="w-10 h-10 mr-2"
                  />
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team A
                  </span> */}
                </div>
                <span className="text-xl font-bold text-gray-900 mx-4">vs</span>
                <div className="flex items-center">
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team B
                  </span> */}
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-b-logo.svg"
                    alt="Team B Logo"
                    className="w-10 h-10 ml-2"
                  />
                </div>
                <span className="text-md text-gray-500 ml-auto">6:30 PM</span>
              </div>

              {/* Example Match Card 2 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between border-l-4 border-green-500">
                <div className="flex items-center">
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-c-logo.svg"
                    alt="Team C Logo"
                    className="w-10 h-10 mr-2"
                  />
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team C
                  </span> */}
                </div>
                <span className="text-xl font-bold text-gray-900 mx-4">vs</span>
                <div className="flex items-center">
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team D
                  </span> */}
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-d-logo.svg"
                    alt="Team D Logo"
                    className="w-10 h-10 ml-2"
                  />
                </div>
                <span className="text-md text-gray-500 ml-auto">8:00 PM</span>
              </div>

              {/* Example Match Card 3 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between border-l-4 border-purple-500">
                <div className="flex items-center">
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-e-logo.svg"
                    alt="Team E Logo"
                    className="w-10 h-10 mr-2"
                  />
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team E
                  </span> */}
                </div>
                <span className="text-xl font-bold text-gray-900 mx-4">vs</span>
                <div className="flex items-center">
                  {/* <span className="text-lg font-semibold text-gray-700">
                    Team F
                  </span> */}
                  <Image
                    width={"100"}
                    height={"100"}
                    src="/team-f-logo.svg"
                    alt="Team F Logo"
                    className="w-10 h-10 ml-2"
                  />
                </div>
                <span className="text-md text-gray-500 ml-auto">7:15 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Home Page Content - Cards */}
      <main className="container mx-auto py-12 px-4">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
          Organize Your Football World
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            imageSrc="/Football-Goal-amico.svg"
            title="Add Player"
            description="Register new players to your club or team with ease."
            linkHref="/add-player"
          />
          <FeatureCard
            imageSrc="/Team-lineup-amico.svg"
            title="Create Team"
            description="Build and manage your football teams, assign players."
            linkHref="/create-team"
          />
          <FeatureCard
            imageSrc="/Soccer-bro.svg"
            title="Start Tournament"
            description="Set up and manage your next thrilling football tournament."
            linkHref="/create-tournament"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
