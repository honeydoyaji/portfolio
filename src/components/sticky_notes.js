import React, { Suspense, useMemo, startTransition, useState } from "react";

const Sticky_Notes = () => {
  return (
    <div>
      <ul>
        <li>
          <a>Software Developer</a>
        </li>
        <li>
          <a>Full Stack Developer</a>
        </li>
        <li>
          <a>Web Developer</a>
        </li>
        <li>
          <a>Cloud Architect</a>
        </li>
        <li>
          <a>Personal Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Sticky_Notes;
