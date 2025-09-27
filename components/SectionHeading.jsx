import React from 'react';

export default function SectionHeading({ id, children, className }) {
  return (
    <h2
      id={id}
      className={
        "container mx-auto px-6 md:px-10 lg:px-14 " + // align with content
        "pl-2 md:pl-4 lg:pl-6 " +                     // nudge to the right
        "text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight " +
        "bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent " +
        (className ?? "")
      }
    >
      {children}
    </h2>
  );
}