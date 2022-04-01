import React from "react";
import PropTypes from "prop-types";

export default function CardAthleteData({
  statTitlePercent,
  statTitle,
  statArrow,
  statPercent,
  bgColor,
}) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg " +
          bgColor
        }
      >
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-white font-bold text-xs">{statTitle}</h5>
              <span className="font-semibold text-white">
                {statTitlePercent}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <p className="text-sm text-white mt-4">
                <span className="mr-2">
                  {statPercent}%
                  <i
                    className={
                      statArrow === "up"
                        ? "fas fa-arrow-up"
                        : statArrow === "down"
                        ? "fas fa-arrow-down"
                        : ""
                    }
                  ></i>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardAthleteData.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardAthleteData.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
