import React from "react";
import "./Techstacks.css";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaUserAlt,
  FaLinux,
} from "react-icons/fa"; // Agregado FaPython
import {
  SiHtml5,
  SiFigma,
  SiKubernetes,
  SiBootstrap, // Agregado SiFigma
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <FaPython />
            <h5>Python</h5>
          </div>

          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <FaDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div>
            <SiBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaLinux />
            <h5>Linux</h5>
          </div>
        </div>
      </div>
    </>
  );
};
