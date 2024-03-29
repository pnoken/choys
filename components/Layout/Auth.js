import React from "react";
// import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="z-0 absolute top-0 w-full h-full bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/auth/bg.svg')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
