"use client";

import React from "react";
import Circle from "../shared/components/Circle";

const Skills = () => {
  const skills = [
    { title: "Angular", text: "What I work with everyday" },
    { title: "React", text: "What I use on my down time" },
    { title: "SolidJS", text: "The Future of what I use. (This Site)" },
    { title: "Rxjs", text: "Observing and Reactivity" },
    { title: "Redux", text: "store(y) of my life" },
    { title: "NgRx", text: "Love State Management" },
    { title: "AEM", text: "Manage content the hard way :)" },
    { title: ".CSS{}", text: "Giving the Web style" },
    { title: "HTML", text: "Giving the Web structure" },
    { title: "JS", text: "Giving the web interaction" },
    { title: "Less", text: "Making CSS...well...less" },
    { title: "Sass", text: "CSS with superpowers" },
    {
      title: "Typescript",
      text: "Less debugging on typos :)",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto">
      <h1 className="text-5xl font-bold text-left mb-20">Skills</h1>
      <ul className="list-none flex p-0 justify-evenly flex-wrap mb-7 gap-10">
        {skills.map((skill, i) => {
          return (
            <li
              key={skill.title}
              className="flex justify-center md:flex-shrink-0 flex-shrink-1 md:flex-grow flex-grow-0 basis-[110px] md:basis-[150px]"
              // style={{ flex: "0 1 150px" }}
            >
              <Circle
                key={skill.title}
                className={
                  i % 2 === 0 ? "circle--primary" : "circle--secondary"
                }
                title={skill.title}
              >
                {skill.text}
              </Circle>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
