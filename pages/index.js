import React, { Fragment } from "react";
import withAuth from "../components/PrivateRoute.js";
import User from "../components/Layout/User";
import CardWellbeing from "../components/Cards/CardWellBeing.js";
import CardDonought from "../components/Cards/CardDonought.js";
import CardWellbeingMenu from "../components/Cards/CardWellbeingMenu.js";

export default function Dashboard() {
  const wellBeingData = [
    {
      url: "/wellbeing-library/chronic-care.png",
      title: "CHRONIC CARE MANAGEMENT",
      description: "Be more active during work days",
    },
    {
      url: "/wellbeing-library/mental-health.png",
      title: "MENTAL HEALTH MANAGEMENT",
      description: "Build habits of meditaion",
    },
    {
      url: "/wellbeing-library/drinking-water.png",
      title: "CHRONIC CARE MANAGEMENT",
      description: "Drinking how much per day is enough ",
    },
  ];

  return (
    <Fragment>
      <div>
        <h2>Your Wellbeing Library</h2>
        <h4>Wellbeing Content recommended for you</h4>
      </div>
      <div className="flex flex-wrap">
        {wellBeingData.map((data, id) => {
          return <CardWellbeing key={id} data={data} />;
        })}
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-1">
          <CardDonought />
        </div>
        <div className="w-full xl:w-4/12 px-1">
          <CardWellbeingMenu />;
        </div>
      </div>
    </Fragment>
  );
}

Dashboard.layout = withAuth(User);
