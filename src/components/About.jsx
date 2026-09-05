import AboutSvg1 from "./svg/About/AboutSvg1.jsx"
import AboutSvg2 from "./svg/About/AboutSvg2.jsx"
import AboutSvg3 from "./svg/About/AboutSvg3.jsx"
import about1 from '../assets/images/about/about-image-01.jpg'
import about2 from '../assets/images/about/about-image-02.jpg'

const About = () => {
  return (
    <section id="about" class="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div class="container">
        <div>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
              <div class="mb-12 max-w-[540px] lg:mb-0">
                <h2
                  class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Innovative Tools for Real Estate Excellence
                </h2>
                <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market
                  with interactive guides and personalized consultations led by industry experts.
                  <br />
                  <br />
                  The main ‘thrust' is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel.
                </p>

                <a href="javascript:void(0)"
                  class="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                  Know More
                </a>
              </div>
            </div>

            <div class="w-full px-4 lg:w-1/2">
              <div class="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img src={about1} alt="about image"
                      class="h-full w-full object-cover object-center" />
                  </div>
                </div>

                <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img src={about2} alt="about image"
                      class="h-full w-full object-cover object-center" />
                  </div>

                  <div
                    class="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span class="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span class="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span class="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <span class="absolute left-0 top-0 -z-10">
                        <AboutSvg1 />
                      </span>
                      <span class="absolute right-0 top-0 -z-10">
                        <AboutSvg2 />
                      </span>
                      <span class="absolute bottom-0 right-0 -z-10">
                        <AboutSvg3 />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default About