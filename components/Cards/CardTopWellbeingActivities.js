import React from "react";
export default function CardTopWellbeingActivities() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Top Wellbeing Activities
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <div className="items-center w-full bg-transparent border-collapse">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-4 p-3">
                <div className="bg-purple-400 p-3 w-12">
                  <img src="wellbeing-activities/drinkwater.svg" />
                </div>
              </div>
              <div class="col-span-2">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "70%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                  <span className="mr-2">70%</span>
                </div>
              </div>
              <div class="col-span-2">Drink Water</div>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-4 p-3">
                <div className="bg-yellow-400 p-3 w-12">
                  <img src="wellbeing-activities/saving.svg" />
                </div>
              </div>
              <div class="col-span-2">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "70%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                  <span className="mr-2">70%</span>
                </div>
              </div>
              <div class="col-span-2">Drink Water</div>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-4 p-3">
                <div className="bg-purple-400 p-3 w-12">
                  <img src="wellbeing-activities/drinkwater.svg" />
                </div>
              </div>
              <div class="col-span-2">
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "70%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                  <span className="mr-2">70%</span>
                </div>
              </div>
              <div class="col-span-2">Drink Water</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
