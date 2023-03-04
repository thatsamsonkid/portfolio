import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-left mb-6">Projects</h1>
      <div className="flex flex-col md:flex-row">
        <div className="relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-blue-jaunts/50 hover:after:bg-none">
          <a href="https://www.amtrak.com">
            <span></span>
            <Image
              src="/images/search-results.png"
              alt=""
              width={360}
              height={243}
            ></Image>
          </a>
        </div>
        <div>Experience Card</div>
      </div>
    </div>
  );
};

export default Projects;
