import React from "react";

export default function CardWellbeingMenu({ data }) {
  const wellBeingMenu = [
    {
      url: "/sidebar-icons/benefits.svg",
      title: "View My Benefits",
    },
    {
      url: "/sidebar-icons/benefits.svg",
      title: "Monthly Mystery Challenge",
    },
    {
      url: "/sidebar-icons/benefits.svg",
      title: "My Insurance",
    },
    {
      url: "/sidebar-icons/benefits.svg",
      title: "Book a mental coaching session",
    },
    {
      url: "/sidebar-icons/benefits.svg",
      title: "My Wellbeing library",
    },
  ];
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-[#EBEDFF]">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            {wellBeingMenu.map((data, id) => {
              return (
                <div
                  key={id}
                  className="relative w-full max-w-full flex-grow flex"
                >
                  <img src={data.url} alt="prize" />
                  <h2 className="text-purple-600 text-xl font-semibold">
                    {data.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
