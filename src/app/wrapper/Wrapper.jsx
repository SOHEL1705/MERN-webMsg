import React from "react";

export default function Wrapper({ children }) {
  return (
    <>
      <section className="w-full bg-neutral-100 drop-shadow-lg  rounded-md p-2 dark:text-white ">
       {children}
      </section>
    </>
  );
}
