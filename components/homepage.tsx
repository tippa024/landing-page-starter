import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export function Homepage() {
  return (
    <div key="1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <a href="https://www.headout.com" target="_blank" rel="noopener noreferrer">
          <h1 className="text-3xl font-bold text-purple-700">HEADOUT</h1>
          <Link className="text-sm text-purple-700 font-mono" href="#">
            Dubai
          </Link>
        </a>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm" href="#">
            English/USD
          </Link>
          <Button className="border-2 bg-white text-black hover:text-white">Sign In</Button>
        </nav>
      </header>
      <div className="flex justify-between items-center mt-6">
        <Input className="flex-grow mr-4" placeholder="Search for fine dinning and other experiences in Dubai" />
        <Button variant="outline">Search</Button>
      </div>



      <div className="mt-4 relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 1"
                  className="w-full h-[500px] object-cover filter rounded-lg"
                  src="https://cdn-imgix.headout.com/tour/35121/TOUR-IMAGE/e4ce0711-abfe-4def-9f52-116088ef9733-18370-dubai-dining-experience-at-burj-khalifa---atmosphere-with-private-dubai-by-night-tour-05.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  height={2000}
                  width={4000}
                  objectFit="fill"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl mb-5 bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:drop-shadow-2xl rounded-md">
                    Bespoke Luxury Dining Experiences At Your Convenience
                  </h2>
                  <div className="pt-2">
                    <span className=" text-white rounded-full tracking-widest font-extralight hover:scale-105 transition duration-75 ">
                      Elevate Your Senses: Discover Dubai&rsquo;s Finest Dining, Beloved by Thousands, Starting at $60
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 1"
                  className="w-full h-[500px] object-cover filter  rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/ab23a4e045f8fc933654c21fbeec18f9-1946-dubai-meal-at-jun-sui--burj-al-arab-01.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  height={2000}
                  width={4000}
                  objectFit="fill"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl mb-5 bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:drop-shadow-2xl rounded-md">
                    Chef Crated Experience With Unparalled Views Of The Burj
                  </h2>
                  <div className="">
                    <span className=" text-white rounded-full tracking-widest font-extralight hover:scale-105 transition duration-75 ">
                      CE LA VI
                    </span>
                  </div>
                  <p className="absolute bottom-10 m-2 mt-4 text-lg bg-transparent border-2 hover:bg-white hover:text-black rounded-lg p-1 font-medium hover:scale-105 transition duration-150">
                    Book Now
                  </p>
                  <p className=" absolute bottom-2 text-gray-100 opacity-50 text-xs rounded-lg p-1 font-light hover:scale-105 transition duration-150">
                    Explore More Like This
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 2"
                  className="w-full h-[500px] object-cover filter rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/72b36bf7234a7c33671178f19a5cdab5-11.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height={2000}
                  width={4000}
                  objectFit="fill"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl mb-5 bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:drop-shadow-2xl rounded-md">
                    Exclusive Gravity Defying Experience With 360 Degree Views
                  </h2>
                  <div className="">
                    <span className=" text-white rounded-full tracking-widest font-extralight hover:scale-105 transition duration-75 ">
                      Dinner in the Sky at Palm
                    </span>
                  </div>
                  <p className="absolute bottom-10 m-2 mt-4 text-lg bg-transparent border-2 hover:bg-white hover:text-black rounded-lg p-1 font-medium hover:scale-105 transition duration-150">
                    Book Now
                  </p>
                  <p className=" absolute bottom-2 text-gray-100 opacity-50 text-xs rounded-lg p-1 font-light hover:scale-105 transition duration-150">
                    Explore More Like This
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 3"
                  className="w-full h-[500px] object-cover filter rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/56b952a34547a237aba09aee2aa22f49-25612-dubai-seven-paintings-dineamation-experience-04.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  height={2000}
                  width={4000}
                  objectFit="fill"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl mb-5 bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:drop-shadow-2xl rounded-md">
                    Blend Fine Dine With Artistic Masterpieces
                  </h2>
                  <div className="">
                    <span className=" text-white rounded-full tracking-widest font-extralight hover:scale-105 transition duration-75 ">
                      Seven Paintings Immersive Dining
                    </span>
                  </div>
                  <p className="absolute bottom-10 m-2 mt-4 text-lg bg-transparent border-2 hover:bg-white hover:text-black rounded-lg p-1 font-medium hover:scale-105 transition duration-150">
                    Book Now
                  </p>
                  <p className=" absolute bottom-2 text-gray-100 opacity-50 text-xs rounded-lg p-1 font-light hover:scale-105 transition duration-150">
                    Explore More Like This
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 4"
                  className="w-full h-[500px] object-cover filter rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/57f24adae4c834bf54fd543781eec4ee-21788-dubai-lunch-or-dinner-buffet-at-mundo-jumeirah-emirates-towers--01.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height={2000}
                  width={4000}
                  objectFit="fill"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl mb-5 bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:drop-shadow-2xl rounded-md">
                    Savour International Dishes Made With Finest Produce
                  </h2>
                  <div className="">
                    <span className=" text-white rounded-full tracking-widest font-extralight hover:scale-105 transition duration-75 ">
                      Mundo Jumeirah
                    </span>
                  </div>
                  <p className="absolute bottom-10 m-2 mt-4 text-lg bg-transparent border-2 hover:bg-white hover:text-black rounded-lg p-1 font-medium hover:scale-105 transition duration-150">
                    Book Now
                  </p>
                  <p className=" absolute bottom-2 text-gray-100 opacity-50 text-xs rounded-lg p-1 font-light hover:scale-105 transition duration-150">
                    Explore More Like This
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow-md transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow-md transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </CarouselNext>
        </Carousel>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold pb-4">Top Dining Experiences in Dubai</h3>
        <div className="flex justify-between items-center mb-4 overflow-x-auto">
          <div className="flex space-x-2 items-center">
            <div className="font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              <span>Filter</span>
            </div>

            <Button
              variant="outline"
              className="bg-white text-black px-4 py-2 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300 border-2 border-gray-300 hover:border-black focus:outline-none"
            >
              Dining with Views
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black px-4 py-2 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300 border-2 border-gray-300 hover:border-black focus:outline-none"
            >
              Hidden Gems
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black px-4 py-2 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300 border-2 border-gray-300 hover:border-black focus:outline-none"
            >
              Experiential Dining
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black px-4 py-2 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300 border-2 border-gray-300 hover:border-black focus:outline-none"
            >
              Best Deals
            </Button>
          </div>

          <div className="relative inline-block text-left">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:shadow-outline">
              <option>Sort: Picked for you</option>
              <option>Sort: Most popular</option>
              <option>Sort: Price (low to high)</option>
              <option>Sort: Price (high to low)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-6-6h12z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative hover:scale-105 transition duration-50">
            <div className="relative">
              <Image
                alt="Luxury Dining Experience"
                height={240}
                src="https://cdn-imgix.headout.com/media/images/58545fc8e2b331dad16f620d7aec5ea6-25527-dubai-at.-mosphere-burj-khalifa-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                layout="responsive"
                objectFit="cover"
                width={390}
              />
              <div className="absolute text-sm top-1 left-1 bg-white text-black px-2 py-1 rounded-lg">Free cancellation</div>
              <div className="absolute  text-xs bottom-1 left-1 bg-white px-2 py-1 rounded-lg">
                <span className="text-red-400 font-medium"><i className="fas fa-star"></i> Limited Availability</span>
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base">At.Mosphere Burj Khalifa Dining at 122nd floor</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $100 <span className="text-purple-500"><i className="fas fa-star"></i> 4.4/5 (25)</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              height={240}
              src="https://cdn-imgix.headout.com/media/images/1617449bf7cf1bbc0e48ae0cff1af033-1946---Dubai---Meal-at-Jun-Sui--Burj-Al-Arab---05.jpg?w=456&h=291&crop=faces&auto=compress%2Cformat&fit=min"
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute top-1 left-1 text-sm bg-white text-black px-2 py-1 rounded-lg">Free cancellation</div>
            <p className="mt-2 text-sm sm:text-base">Tickets to CE LA VI Dubai: Lunch Set Menu with Burj Khalifa Views</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $80 <span className="text-purple-500"><i className="fas fa-star"></i> 4.5/5 (387)</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/media/images/738bdb1fa0025aac0588a86789dfecd7-21788-dubai-lunch-or-dinner-buffet-at-mundo-jumeirah-emirates-towers--05.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute text-sm top-1 left-1 bg-white text-black px-2 py-1 rounded-lg">Free cancellation</div>
            <p className="mt-2 text-sm sm:text-base">Mundo Dining Experience</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $60 <span className="text-purple-500"><i className="fas fa-star"></i> NEW</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/media/images/bf495b1a20b4de4c74b6e8cd327a25fa-25612-dubai-seven-paintings-dineamation-experience-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute  text-sm top-1 left-1 bg-white text-black px-2 py-1 rounded-lg">Free cancellation</div>
            <p className="mt-2 text-sm sm:text-base">Seven Paintings Immersive Dining Show with 7-Course Menu</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $120 <span className="text-purple-500"><i className="fas fa-star"></i> NEW</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <div className="relative">
              <Image
                alt="Luxury Dining Experience"
                src="https://cdn-imgix.headout.com/media/images/72b36bf7234a7c33671178f19a5cdab5-11.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                height={240}
                layout="responsive"
                objectFit="cover"
                width={390}
              />
              <div className="absolute  text-xs bottom-1 left-1 bg-white px-2 py-1 rounded-lg">
                <span className="text-red-400 font-medium"><i className="fas fa-star"></i> Limited Availability</span>
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base">Dinner in the Sky at the 360 degree views of Plam</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $200 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (820)</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/media/images/f76641ace3b9aec75f4af113614da41e-20719-dubai-saffron-dinner-buffet--including-soft-drinks--at-atlantis-the-palm-07.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />

            <p className="mt-2 text-sm sm:text-base">Dinner Buffet at Saffron Atlantis with Entry to Ambassador Lagoon</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $70 <span className="text-purple-500"><i className="fas fa-star"></i> 4.4/5 (35)</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/tour/35121/TOUR-IMAGE/d4d3637a-63b6-468f-9cdb-f8bef731af95-18370-dubai-dining-experience-at-burj-khalifa---atmosphere-with-private-dubai-by-night-tour-03.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute text-sm top-1 left-1 bg-white text-black px-2 py-1 rounded-lg">Free Cancellation</div>
            <p className="mt-2 text-sm sm:text-base">Private Dubai Tour by Night with Dining Experience</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $500 <span className="text-purple-500"><i className="fas fa-star"></i> NEW</span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/media/images/707a87f7f3c1a9c2a9d0103cfdc6bb7e-23848-ChefKuv-sSecretSupper-UndergroundDiningExperience-002.png?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute top-1 left-1 bg-white text-black px-2 py-1 text-sm rounded-lg">Free cancellation</div>
            <p className="mt-2 text-sm sm:text-base">5-course Underground Dining Experience at Chef Kuv's Secret</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $100 <span className="text-purple-500"><i className="fas fa-star"></i> New </span>
            </p>
          </div>
          <div className="relative hover:scale-105 transition duration-50">
            <Image
              alt="Luxury Dining Experience"
              src="https://cdn-imgix.headout.com/media/images/d73a4af9ffff7a6c3e8b25171ef6485b-23949-dubai-girl---the-goose-underground-dining-experience-01.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              height={240}
              layout="responsive"
              objectFit="cover"
              width={390}
            />
            <div className="absolute top-1 left-1 text-sm bg-white text-black px-2 py-1 rounded-lg">Free cancellation</div>
            <p className="mt-2 text-sm sm:text-base">5-Course Underground Dining Experience with Private Chef</p>
            <p className="mt-1 text-xs sm:text-sm font-bold">
              $100 <span className="text-purple-500"><i className="fas fa-star"></i> New </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold">Other Top Rated Experiences in Dubai</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Global Village Dubai Tickets"
              height="180"
              src="https://cdn-imgix.headout.com/media/images/58edeca4e72dd3d0a6e427d2f9e32fb0-2449-Dubai-TicketstoGlobalVillageDubai-15.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Tickets to Global Village Dubai</h3>
            <p className="mt-1 text-sm font-bold">
              $10 <span className="text-purple-500"><i className="fas fa-star"></i> 4.5/5 (3.8K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Dubai Miracle Garden Skip-the-Line Entry Tickets"
              height="180"
              src="https://cdn-imgix.headout.com/tour/26849/TOUR-IMAGE/c1a53b3a-69c7-46ce-9c6e-5bc91d486a62-14133-dubai-dubai-miracle-garden-11.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Dubai Miracle Garden Skip-the-Line Entry Tickets</h3>
            <p className="mt-1 text-sm font-bold">
              $25 <span className="text-purple-500"><i className="fas fa-star"></i> 4.5/5 (6.5K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="IMGCWt"
              height="180"
              src="https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">IMG Worlds of Adventure Tickets</h3>
            <p className="mt-1 text-sm font-bold">
              $60 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (4.4K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Burj Khalifa At the Top Tickets: Level 124 & 125"
              height="180"
              src="https://cdn-imgix.headout.com/tour/2638/TOUR-IMAGE/5c69fb75-54ec-4ed3-a9cd-d4e8c56ce8b4-1866-dubai-burj-khalifa-at-the-top-tickets--level-124---125-05.jpeg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Burj Khalifa At the Top Tickets: Level 124 & 125</h3>
            <p className="mt-1 text-sm font-bold">
              $50 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (23.4K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <div className="relative">
              <Image
                alt="Dubai Frame Tickets with Optional Meal Voucher"
                height="180"
                src="https://cdn-imgix.headout.com/media/images/6c6519b8db7ddab3f5381d54ee30032a-Frame-banner.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                style={{
                  aspectRatio: "260/180",
                  objectFit: "cover",
                }}
                width="260"
              />
              <div className="absolute  text-xs bottom-1 left-1 bg-white px-2 py-1 rounded-lg">
                <span className="text-red-400 font-medium"><i className="fas fa-star"></i> Limited Availability</span>
              </div>
            </div>
            <h3 className="mt-2">Dubai Frame Tickets with Optional Meal Voucher</h3>
            <p className="mt-1 text-sm font-bold">
              $15 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (10.2K)</span>

            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Tickets to Aquaventure Waterpark"
              height="180"
              src="https://cdn-imgix.headout.com/tour/2643/TOUR-IMAGE/85367319-ed2e-4bf5-9e44-3f5fcd09f3ff-AquaventureWaterParkTickets-02.JPG?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Tickets to Aquaventure Waterpark</h3>
            <p className="mt-1 text-sm font-bold">
              $90 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (1.9K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Desert Safari with Entertainment & BBQ Dinner"
              height="180"
              src="https://cdn-imgix.headout.com/tour/2671/TOUR-IMAGE/4ba76259-a481-4bd7-b78e-2d6d50f3a239-1887-dubai--classic-desert-safari-with-entertainment-03.jpg?w=490.5&h=306&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Desert Safari with Entertainment & BBQ Dinner</h3>
            <p className="mt-1 text-sm font-bold">
              $40 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (2.5K)</span>
            </p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <Image
              alt="Dubai Aquarium & Underwater Zoo Tickets"
              height="180"
              src="https://cdn-imgix.headout.com/media/images/fc71110a7d400f5fc56062c80ce7ddb0-AdobeStock-52233543.jpeg?w=490.5&h=306&crop=faces&auto=compress%2Cformat&fit=min"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Dubai Aquarium & Underwater Zoo Tickets</h3>
            <p className="mt-1 text-sm font-bold">
              $35 <span className="text-purple-500"><i className="fas fa-star"></i> 4.1/5 (9.9K)</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="outline">Show more</Button>
        </div>
      </div>
    </div>
  )
}
