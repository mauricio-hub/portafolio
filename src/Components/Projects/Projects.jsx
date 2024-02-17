import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import enerPic from "../../assets/ener.png";
import guepPic from "../../assets/gue.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Recent Jobs and Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={enerPic} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Enersinc SAS</h2>
                <p>
                  Enersinc SAS is a company that provides services in the
                  electrical sector. The company is based in Colombia and and I
                  am part of the IT team where I have responsibility for
                  developing scalable applications.
                </p>
                <div>
                  {/*  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://enersinc.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Visit Website
                    </span>
                  </a>
                  {/*  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={guepPic} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Guepardos</h2>
                <p>
                  Guepardos is a logistics service in Medellin, Colombia and I
                  was hired as a freelancer to design and code the application.
                </p>
                <br />
                <br />

                <div>
                  {/*  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript /> */}
                </div>
                <div>
                  <a
                    href="https://guepardos.co/#inicio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Visit Website
                    </span>
                  </a>
                 
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
