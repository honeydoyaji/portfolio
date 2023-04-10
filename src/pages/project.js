import React, { Suspense, useMemo } from "react";

import { FILTERED, TAGS, PR_LISTS } from "../components/data_list.js";

function Project() {
  return (
    <div className="content" id="project">
      <section id="tag_project">
        <h1>Projects</h1>
        <div id="search_div">
          <div id="tag_list">
            <div
              className={`skill_tag ${
                FILTERED.find((tag) => tag.tag === "2022")?.id
              }`}
            >
              Filter by tag:{" "}
            </div>
            {FILTERED.map((tagie, index) => (
              <div key={index} className={`skill_tag ${tagie.id}`}>
                <span
                  key={index}
                  id={`${tagie.type}${tagie.id}`}
                  className={`job_skills_c${tagie.id}`}
                >
                  {tagie.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="me_col" id="pf_middle_pj">
        <div className="masonry">
          {PR_LISTS.map((pr, index) => (
            <div key={index} className={`masonry-item ${index}`}>
              <h2>{pr.title}</h2>
              <h3>{pr.subtitle}</h3>
              <h4>{pr.description}</h4>
              <div className="filter-items">
                {pr.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`skill_tag ${
                      TAGS.find((tag) => tag.tag === skill)?.id
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
