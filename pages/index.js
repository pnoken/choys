import React from "react";
import CardActivationRate from "../components/Cards/CardActivationRate.js";
import CardKeyWords from "../components/Cards/CardKeyWords.js";
import CardLineChart from "../components/Cards/CardLineChart.js";
import CardTopWellbeingActivities from "../components/Cards/CardTopWellbeingActivities.js";
import NewJoinerVideo from "../components/Cards/NewJoinerVideo.js";
import WellbeingChampionBoard from "../components/Cards/WellBeingChampionBoard.js";
import withAuth from "../components/PrivateRoute.js";
import Admin from "../components/Layout/Admin";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-3/12 px-4">
          <CardActivationRate />
        </div>
        <div className="w-full xl:w-3/12 px-4">
          <CardKeyWords />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-5/12 mb-12 xl:mb-0 px-4">
          <CardTopWellbeingActivities />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <WellbeingChampionBoard />
        </div>
        <div className="w-full xl:w-3/12 px-4">
          <NewJoinerVideo />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = withAuth(Admin);
