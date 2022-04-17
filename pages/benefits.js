import React from "react";
import withAuth from "../components/PrivateRoute";
import User from "../components/Layout/User";
import CardMyInsurance from "../components/MyInsurance/CardMyInsurance";

export default function Benefits() {
  const myInsurance = [
    {
      url: "/wellbeing-library/chronic-care.png",
      title: "My Coverage",
      subTitle: "My Coverage",
      description: `Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha
                lumbersexual pork belly polaroid hoodie portland craft beer`,
    },
    {
      url: "/wellbeing-library/mental-health.png",
      title: "General Information",
      subTitle: "My Coverage",
      description: "Build habits of meditaion",
    },
    {
      url: "/wellbeing-library/drinking-water.png",
      title: "How to make a claim",
      subTitle: "My Coverage",
      description: "Drinking how much per day is enough ",
    },
    {
      url: "/wellbeing-library/drinking-water.png",
      title: "FAQ",
      subTitle: "My Coverage",
      description: "Drinking how much per day is enough ",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-1">
          {myInsurance.map((data, id) => {
            return <CardMyInsurance key={id} data={data} />;
          })}
        </div>
        <div className="w-full mb-12 px-1">
          {/* <CardTable color="dark" /> */}
        </div>
      </div>
    </>
  );
}

Benefits.layout = withAuth(User);
