import React, { useState } from "react";

import { FILTERED, TAGS, PR_LISTS } from "../components/data_list.js";

function Project() {
  const [selectedSkill, setSelectedSkill] = useState("");

  function filterProjectsBySkill(skill) {
    setSelectedSkill(skill);
  }

  function filterProjects(pr) {
    if (selectedSkill === "") {
      return true;
    } else {
      return pr.skills.includes(selectedSkill);
    }
  }

  function resetFilters() {
    setSelectedSkill("");
  }

  return (
    <div className="content" id="project">
      <section id="tag_project">
        <h1>Projects</h1>
        <div id="search_div">
          <div id="tag_list">
            <div
              onClick={() => resetFilters()}
              className={`skill_tag skill_tag_reset
              }`}
            >
              Reset
            </div>
            <div
              className={`skill_tag skill_tag_filter
              }`}
            >
              Filter by tag:{" "}
            </div>
            {FILTERED.map((tagie, index) => (
              <div
                key={index}
                className={`skill_tag ${tagie.id}`}
                onClick={() => filterProjectsBySkill(tagie.tag)}
              >
                <span
                  key={index}
                  id={`${tagie.id}`}
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
          {PR_LISTS.filter(filterProjects).map((pr, index) => (
            <a
              key={index}
              className={`masonry-item ${index}`}
              href={pr.projectLink}
              target="_blank"
            >
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
                    onClick={() => filterProjectsBySkill(skill)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
