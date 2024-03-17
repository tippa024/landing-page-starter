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
        </a>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm" href="#">
            English/USD
          </Link>

          <Link className="text-sm" href="#">
            Dubai
          </Link>

          <Button className="border-2 bg-white text-stone-500">Sign In</Button>
        </nav>
      </header>
      <div className="flex justify-between items-center mt-6">
        <Input className="flex-grow mr-4" placeholder="Search for finiest dinning experiences in Dubai" />
        <Button variant="outline">Search</Button>
      </div>
      <div className="flex justify-start whitespace-nowrap items-center mt-4 space-x-4 overflow-x-auto">
        <Button variant="outline" className="bg-white text-black px-6 py-3 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300">
          Dining with Views
        </Button>
        <Button variant="outline" className="bg-white text-black px-6 py-3 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300">
          Hidden Gems
        </Button>
        <Button variant="outline" className="bg-white text-black px-6 py-3 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300">
          Experiential Dining
        </Button>
        <Button variant="outline" className="bg-white text-black px-6 py-3 rounded-lg hover:shadow-md hover:bg-stone-100 transition duration-300">
          Best Deals
        </Button>
      </div>


      <div className="mt-4 relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 1"
                  className="w-full h-[500px] object-cover filter blur-[1px] rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/ab23a4e045f8fc933654c21fbeec18f9-1946-dubai-meal-at-jun-sui--burj-al-arab-01.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height="2400"
                  width="3900"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 2"
                  className="w-full h-[500px] object-cover filter blur-[1px] rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/9731441605b8e979c668f53416b07e04-20719-dubai-saffron-dinner-buffet--including-soft-drinks--at-atlantis-the-palm-08.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height="2400"
                  width="3900"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 3"
                  className="w-full h-[500px] object-cover filter blur-[1px] rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/04c931ab61a78d8926b08309d5696c91-25612-dubai-seven-paintings-dineamation-experience-03.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height="2400"
                  width="3900"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  alt="Hero Image 3"
                  className="w-full h-[500px] object-cover filter blur-[1px] rounded-lg"
                  src="https://cdn-imgix.headout.com/media/images/d73a4af9ffff7a6c3e8b25171ef6485b-23949-dubai-girl---the-goose-underground-dining-experience-01.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                  style={{
                    aspectRatio: "390/240",
                    objectFit: "cover",
                  }}
                  height="2400"
                  width="3900"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-75 rounded-lg"></div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl bg-gradient-to-r from-stone-300 via-amber-300 to-zinc-200 font-semibold bg-clip-text text-transparent hover:scale-105 transition duration-150 border-purple-100 border-1 p-1 hover:border-red-500 hover:tracking-widest hover:font-thin hover:drop-shadow-2xl  rounded-md">
            Bespoke Luxury Dining Experiences at Your Convinience
          </h2>
          <p className="m-2 mt-4 text-lg font-light">
            Elevate Your Senses: Discover Dubai&rsquo;s Finest Dining, Beloved by Thousands, Starting at $60
          </p>
          <p className="m-2 mt-4 text-lg bg-red-500 rounded-lg p-1 font-medium hover:scale-105 transition duration-150">
            Book Now
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold pb-4">Curated List</h3>
        <div className="min-w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <CardContent className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
                    <Image
                      alt="Luxury Dining Experience"
                      height={240}
                      src="https://cdn-imgix.headout.com/media/images/58545fc8e2b331dad16f620d7aec5ea6-25527-dubai-at.-mosphere-burj-khalifa-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                      layout="responsive"
                      objectFit="cover"
                      width={390}
                    />
                    <p className="mt-2 text-sm sm:text-base">At.Mosphere Burj Khalifa Dining at 122nd floor</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold">
                      $100{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> 4.4/5 (25)
                      </span>
                      <span className="text-red-400 font-medium">
                        <i className="fas fa-star"></i> Limited Availability
                      </span>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
                    <Image
                      alt="Luxury Dining Experience"
                      height={240}
                      src="https://cdn-imgix.headout.com/media/images/1617449bf7cf1bbc0e48ae0cff1af033-1946---Dubai---Meal-at-Jun-Sui--Burj-Al-Arab---05.jpg?w=456&h=291&crop=faces&auto=compress%2Cformat&fit=min"
                      layout="responsive"
                      objectFit="cover"
                      width={390}
                    />
                    <p className="mt-2 text-sm sm:text-base">Tickets to CE LA VI Dubai: Lunch Set Menu with Burj Khalifa Views</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold">
                      $80{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> 4.5/5 (387)
                      </span>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
                    <Image
                      alt="Luxury Dining Experience"
                      src="https://cdn-imgix.headout.com/media/images/738bdb1fa0025aac0588a86789dfecd7-21788-dubai-lunch-or-dinner-buffet-at-mundo-jumeirah-emirates-towers--05.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                      height={240}
                      layout="responsive"
                      objectFit="cover"
                      width={390}
                    />
                    <p className="mt-2 text-sm sm:text-base">Mundo Dining Experience</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold">
                      $60{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> NEW
                      </span>
                    </p>
                  </div>
                </CardContent>
              </CarouselItem>
              <CarouselItem>
                <CardContent className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
                    <Image
                      alt="Luxury Dining Experience"
                      src="https://cdn-imgix.headout.com/media/images/bf495b1a20b4de4c74b6e8cd327a25fa-25612-dubai-seven-paintings-dineamation-experience-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                      height={240}
                      layout="responsive"
                      objectFit="cover"
                      width={390}
                    />
                    <p className="mt-2 text-sm sm:text-base">Seven Paintings Immersive Dining Show with 7-Course Menu</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold">
                      $120{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> NEW
                      </span>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
                    <Image
                      alt="Luxury Dining Experience"

                      src="https://cdn-imgix.headout.com/media/images/72b36bf7234a7c33671178f19a5cdab5-11.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min"
                      height={240}
                      layout="responsive"
                      objectFit="cover"
                      width={390}
                    />
                    <p className="mt-2 text-sm sm:text-base">Dinner in the Sky at the 360 degree views of Plam</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold">
                      $200{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> 4.3/5 (820)
                      </span>
                      <span className="text-red-400 font-medium">
                        <i className="fas fa-star"></i> Limited Availability
                      </span>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 hover:scale-105 transition duration-50">
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
                      $70{" "}
                      <span className="text-purple-500">
                        <i className="fas fa-star"></i> 4.4/5 (35)
                      </span>
                    </p>
                  </div>
                </CardContent>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Habibi Welcome to Dubai</h3>
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
            <h3 className="mt-2">Dubai Frame Tickets with Optional Meal Voucher</h3>
            <p className="mt-1 text-sm font-bold">
              $15 <span className="text-purple-500"><i className="fas fa-star"></i> 4.3/5 (10.2K)</span>
              <span className="text-yellow-500 font-medium"><i className="fas fa-star"></i> filling fast</span>
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
