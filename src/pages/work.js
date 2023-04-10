import React, { useState, useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import { TAGS, JOBS } from "../components/data_list.js";

function Work() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  return (
    <div className="content bg-set" id="work">
      <h1>Work Experience</h1>
      <div id="work-content">
        {JOBS.map((job, index) => (
          <div key={index} className={`job ${index}`}>
            <div className="job_main">
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <h4>{job.date}</h4>
            </div>
            <div className="job_desc">
              {job.description.map((desc, index) => (
                <p
                  key={index}
                  className={`job_desc job_description_c${index + 1}`}
                >
                  <AiOutlineArrowRight /> {desc}
                </p>
              ))}
            </div>
            <div className="job_skills">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`skill_tag ${
                    TAGS.find((tag) => tag.tag === skill)?.id
                  }`}
                >
                  {skill}
                </span>
              ))}
              {job.projectLink && (
                <span className="skill_tag work_project">
                  <a href={job.projectLink}>Project &#187;</a>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
