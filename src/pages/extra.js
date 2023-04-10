import React from "react";

import My_Ani from "../components/my_ani.js";

const Me = () => {
  return (
    <div className="content" id="me">
      <section className="me_col">
        <header>Code with Creativity, Energy and Joy!</header>
        <div>
          <p>Seohyun Claire Yoon</p>
          <h2 id="my_name">Seohyun Claire yoon</h2>
          <h3 className="my_info">&#128205; West Lafayette, IN</h3>
          <h3 className="my_info">&#127979; Purdue University</h3>
          <h4 className="my_info">
            &#10133; Computer and Information Technology
          </h4>
          <h4 className="my_info">
            &#10134; Technology Leadership & Innovation
          </h4>
        </div>
      </section>
      <section className="me_col">
        <My_Ani />
      </section>
    </div>
  );
};

export default Me;
