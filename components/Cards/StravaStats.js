export default function StravaCard({
  distance,
  average_speed,
  average_heartrate,
  location_country,
}) {
  return (
    <section className="py-20 2xl:py-40 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div>
          <div className="flex flex-wrap -mx-6 lg:-mx-14">
            <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
              <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                {/* <img
                  className="absolute inset-0 w-full h-full"
                  src="zospace-assets/lines/circle-chart.svg"
                  alt=""
                /> */}
                <p className="text-2xl font-bold text-white">
                  <span>{distance}</span>
                  <span className="text-base">m</span>
                </p>
              </div>
              <div className="py-px mb-12 bg-gray-500"></div>
              <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                Distance
              </h3>
              <p className="text-lg text-gray-200">
                You covered a distanc of {distance} m
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
              <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                {/* <img
                  className="absolute inset-0 w-full h-full"
                  src="zospace-assets/lines/circle-chart-purple.svg"
                  alt=""
                /> */}
                <p className="text-2xl font-bold text-white">
                  <span>{average_speed}</span>
                  <span className="text-base">m/h</span>
                </p>
              </div>
              <div className="py-px mb-12 bg-gray-500"></div>
              <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                You covered an Average Speed of {average_speed}
              </h3>
              <p className="text-lg text-gray-200">Average Speed</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 md:mb-0">
              <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                {/* <img
                  className="absolute inset-0 w-full h-full"
                  src="zospace-assets/lines/circle-chart-green.svg"
                  alt=""
                /> */}
                <p className="text-2xl font-bold text-white">
                  <span>{average_heartrate}</span>
                  <span className="text-base">beats per min</span>
                </p>
              </div>
              <div className="py-px mb-12 bg-gray-500"></div>
              <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                Average Heartrate
              </h3>
              <p className="text-lg text-gray-200">
                The time, this accumsan augue, posuere posuere elit lorem.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14">
              <div className="relative flex items-center justify-center mb-10 w-20 h-20">
                {/* <img
                  className="absolute inset-0 w-full h-full"
                  src="zospace-assets/lines/circle-chart-pink.svg"
                  alt=""
                /> */}
                <p className="text-2xl font-bold text-white">
                  <span>{location_country}</span>
                  <span className="text-base"></span>
                </p>
              </div>
              <div className="py-px mb-12 bg-gray-500"></div>
              <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                Location Country
              </h3>
              <p className="text-lg text-gray-200">Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
