import React from "react";

export default function Section({ name, title, children }) {
  return (
    <section>
      <h3 id={name} className="mb-5">
        {title}
      </h3>

      {children}
    </section>
  );
}
