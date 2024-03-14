import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export function Homepage() {
  return (
    <div key="1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <a href="https://www.headout.com" target="_blank" rel="noopener noreferrer">
          <h1 className="text-3xl font-bold">HEADOUT</h1>
        </a>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm" href="#">
            English/INR
          </Link>
          <Link className="text-sm" href="#">
            Help
          </Link>
          <Button className="bg-[#bd1e59] text-white">Sign In</Button>
        </nav>
      </header>
      <div className="flex justify-between items-center mt-6">
        <Input className="flex-grow mr-4" placeholder="Search for experiences and cities" />
        <Button variant="outline">Search</Button>
      </div>
      <div className="flex justify-between items-center mt-5 space-x-4">
        <Button variant="ghost">All categories</Button>
        <Button variant="ghost">Bestsellers</Button>
        <Button variant="ghost">Burj Khalifa Tickets</Button>
        <Button variant="ghost">Aquaventure Tickets</Button>
      </div>
      <div className="mt-8 relative">
        <img alt="Hero Image" className="w-full h-[400px] object-cover filter blur-[2px] rounded-lg" src="https://cdn-imgix.headout.com/media/images/9731441605b8e979c668f53416b07e04-20719-dubai-saffron-dinner-buffet--including-soft-drinks--at-atlantis-the-palm-08.jpg?w=1200&h=750&crop=faces&auto=compress%2Cformat&fit=min" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-2xl font-semibold hover:scale-105 transcition duration-75 border-purple-100 border-2 p-1 hover:border-0 hover:italic hover:font-serif rounded-md">Bespoke Luxury Dining at Your Convenience</h2>
          <p className="mt-2 text-lg">
            From themed nights at Mundo to a gastronomic journey at the Atmosphere, Burj Khalifa.
          </p>
          <p className="mt-2 text-lg bg-red-500 rounded-lg p-1 font-medium hover:scale-105 trasition duration-150">Starting at $60</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold pb-4">Curated List</h3>
        <div className="min-w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <CardContent className="flex flex-nowrap gap-4">
                  <div className="w-[calc(50%-1rem)] hover:scale-105 transition duration-50">
                    <img
                      alt="Luxury Dining Experience"
                      height="240"
                      src="https://cdn-imgix.headout.com/media/images/58545fc8e2b331dad16f620d7aec5ea6-25527-dubai-at.-mosphere-burj-khalifa-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                      style={{
                        aspectRatio: "390/240",
                        objectFit: "cover",
                      }}
                      width="390"
                    />
                    <p className="mt-2">At.Mosphere Burj Khalifa Dining</p>
                    <p className="mt-1 text-sm font-medium">$100</p>
                  </div>
                  <div className="w-[calc(50%-1rem)] hover:scale-105 transition duration-50">
                    <img
                      alt="Luxury Dining Experience"
                      height="240"
                      src="https://cdn-imgix.headout.com/media/images/1617449bf7cf1bbc0e48ae0cff1af033-1946---Dubai---Meal-at-Jun-Sui--Burj-Al-Arab---05.jpg?w=456&h=291&crop=faces&auto=compress%2Cformat&fit=min"
                      style={{
                        aspectRatio: "390/240",
                        objectFit: "cover",
                      }}
                      width="390"
                    />
                    <p className="mt-2">Tickerts to CE LA VI Dubai: Lunch Set Menu with Burj Khalifa Views</p>
                    <p className="mt-1 text-sm font-medium">$80</p>
                  </div>
                  <div className="w-[calc(50%-1rem)] hover:scale-105 transition duration-50">
                    <img
                      alt="Luxury Dining Experience"
                      height="240"
                      src="https://cdn-imgix.headout.com/media/images/57f24adae4c834bf54fd543781eec4ee-21788-dubai-lunch-or-dinner-buffet-at-mundo-jumeirah-emirates-towers--01.jpg?w=576&h=360&crop=faces&auto=compress%2Cformat&fit=min"
                      style={{
                        aspectRatio: "390/240",
                        objectFit: "cover",
                      }}
                      width="390"
                    />
                    <p className="mt-2">Mundo Dining Experience with Themed Nights</p>
                    <p className="mt-1 text-sm font-medium">$60</p>
                  </div>
                </CardContent>
              </CarouselItem>
              <CarouselItem>
                <CardContent>
                  <img
                    alt="Luxury Dining Experience"
                    height="240"
                    src="https://cdn-imgix.headout.com/media/images/bf495b1a20b4de4c74b6e8cd327a25fa-25612-dubai-seven-paintings-dineamation-experience-02.jpg?w=930&h=581.25&crop=faces&auto=compress%2Cformat&fit=min"
                    style={{
                      aspectRatio: "390/240",
                      objectFit: "cover",
                    }}
                    width="390"
                  />
                  <p className="mt-2">Seven Paintings Immersive Dining Show with 7-Course Menu</p>
                  <p className="mt-1 text-sm font-medium">$120</p>
                </CardContent>
              </CarouselItem>
              <CarouselItem>
                <CardContent>
                  <img
                    alt="Luxury Dining Experience"
                    height="240"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "390/240",
                      objectFit: "cover",
                    }}
                    width="390"
                  />
                  <p className="mt-2">Gourmet Journey at Atmosphere</p>
                  <p className="mt-1 text-sm font-medium">$180</p>
                </CardContent>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Top rated experiences you shouldn't miss out</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 1</h3>
            <p className="mt-1 text-sm font-medium">$50</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 2</h3>
            <p className="mt-1 text-sm font-medium">$60</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 3</h3>
            <p className="mt-1 text-sm font-medium">$70</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 4</h3>
            <p className="mt-1 text-sm font-medium">$80</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 5</h3>
            <p className="mt-1 text-sm font-medium">$90</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 6</h3>
            <p className="mt-1 text-sm font-medium">$100</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 7</h3>
            <p className="mt-1 text-sm font-medium">$110</p>
          </div>
          <div className="hover:scale-105 transition duration-50">
            <img
              alt="Experience"
              height="180"
              src="/placeholder.svg"
              style={{
                aspectRatio: "260/180",
                objectFit: "cover",
              }}
              width="260"
            />
            <h3 className="mt-2">Experience 8</h3>
            <p className="mt-1 text-sm font-medium">$120</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="outline">Show more</Button>
        </div>
      </div>
    </div>
  )
}
