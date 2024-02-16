import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/pic.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hello, I'm <span className="different">Mauricio González</span>, I'm a web application developer. I
                have experience with tools such as html, css, js, react, python
                and figma. I also have basic knowledge of ux/ui. Throughout my
                career I have worked more in the frontend area but I have also I
                did a little backend and I also had to propose the design for
                these projects. <br /> I adapt very well to work teams, I understand
                where I like to contribute with my creativity. to achieve the
                goal of a solid and scalable product.
              </h4>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
