import React from "react";

import My_Ani from "../components/my_ani.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Me = () => {
  return (
    <div className="content" id="me">
      <h1 id="me_header" className="bg-set">
        Code with Creativity, Energy and Joy!
      </h1>
      <section id="me_content">
        <div id="ap_bg" className="bg-set">
          <My_Ani />
        </div>
        <div class="me_col">
          <div id="aboutme">
            <div id="me_me" className="bg-set">
              <h2>Seohyun Claire Yoon</h2>
              <h3>&#127979; Purdue University &#128205; West Lafayette, IN</h3>
              <h3>&#10133; Computer and Information Technology</h3>
              <h3>&#10134; Technology Leadership & Innovation</h3>
              <h3>Email: yoon202@purdue.edu</h3>
            </div>
            <div id="me_contact" className="bg-set">
              <h2>Contact</h2>
              <div id="contact-info">
                <div className="contact_opt">
                  <button
                    onclick="location.href='https://github.com/honeydoyaji'"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faGithub}
                      size="5x"
                      style={{ color: "white" }}
                    />
                  </button>
                  <h3>Github</h3>
                </div>
                <div className="contact_opt">
                  <button
                    onclick="location.href='https://www.linkedin.com/in/shclaireyoon/'"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faLinkedinIn}
                      size="5x"
                    />
                  </button>
                  <h3>LinkedIn</h3>
                </div>
                <div className="contact_opt">
                  <button onclick="location.href='../resume.pdf'" download>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faFileArrowDown}
                      size="5x"
                    />
                  </button>
                  <h3>Resume</h3>
                </div>
              </div>
            </div>
          </div>
          <div id="detailme">
            <div className="bg-set">
              <h2>About Me</h2>
              <p>
                Hello, I'm a senior student studying at Purdue University with a
                keen interest in the Information Technology field. My particular
                passions are software development, DevOps, Cloud, and Database.
              </p>

              <p>
                I love taking on new experiences and challenges and am always
                seeking out opportunities to grow and learn. My adaptability and
                enthusiasm for life make me a positive and valuable addition to
                any team.
              </p>

              <p>
                I enjoy designing, creating, and solving problems, and I'm
                currently exploring web development and AWS Cloud areas. I'm
                always striving to develop new skills and knowledge.
              </p>

              <p>
                Growing up in South Korea and visiting countries such as
                Australia, Canada, Japan, China, Thailand, Taiwan, and the
                United States has fostered my open-mindedness and love of
                diverse cultures. This allows me to think outside the box and
                find creative ways to make things more efficient, which is a
                strength I bring to any project.
              </p>

              <p>
                With my strong intuition and analytical skills, I'm adept at
                identifying problems and generating innovative solutions. I'm
                always excited to collaborate with others and contribute to the
                success of any project.
              </p>
            </div>
            <div className="bg-set">
              <h2>Dev Skills</h2>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>Frontend (HTML, CSS, JS)</li>
              <li>Python</li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Me;
