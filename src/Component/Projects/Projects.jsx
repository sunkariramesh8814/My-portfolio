import React from "react";
import ProjectCard from "./ProjectCard";
import bookstoreImage from "../../assets/libmanage.jpg"; // Replace with your actual image path
import myntraCloneImage from "../../assets/myntraclone.png"; // Replace with your actual image path
import portfolioImage from "../../assets/port.png"; // Replace with your actual image path

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Bookstore Management System"
          main="This is an E-commerce website built using Java to manage bookstore operations."
          repoLink="https://github.com/Sunkariramesh8814/bookstore-management"
          image={bookstoreImage}
        />
        <ProjectCard
          title="Myntra Clone"
          main="This is a E-commerce website created in ReactJs and uses component libraries to make a fully functional Myntra clone."
          repoLink=""
          image={myntraCloneImage}
        />
        <ProjectCard
          title="Portfolio Website"
          main="This is a blogging website created in ReactJs and uses component libraries to showcase my skills and information about me."
          repoLink=""
          image={portfolioImage}
        />
      </div>
    </div>
  );
};

export default Projects;
