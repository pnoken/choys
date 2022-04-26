import React from "react";
import CardActivationRate from "../../components/Cards/CardActivationRate.js";
import CardKeyWords from "../../components/Cards/CardKeyWords.js";
import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardTopWellbeingActivities from "../../components/Cards/CardTopWellbeingActivities.js";
import NewJoinerVideo from "../../components/Cards/NewJoinerVideo.js";
import WellbeingChampionBoard from "../../components/Cards/WellBeingChampionBoard.js";
import withAuth from "../../components/PrivateRoute.js";
import Admin from "../../components/Layout/Admin";
import UserStats from "../../components/Headers/UserStats.js";

export default function AdminDashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-1">
          <UserStats />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-1">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-3/12 px-1">
          <CardActivationRate />
        </div>
        <div className="w-full xl:w-3/12 px-1">
          <CardKeyWords />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-1">
          <CardTopWellbeingActivities />
        </div>
        <div className="w-full xl:w-4/12 px-1">
          <WellbeingChampionBoard />
        </div>
        <div className="w-full xl:w-2/12 px-1">
          <NewJoinerVideo />
        </div>
      </div>
    </>
  );
}

AdminDashboard.layout = withAuth(Admin);
