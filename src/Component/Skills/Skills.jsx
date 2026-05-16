import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { SiHibernate, SiSpring, SiSpringboot } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:p-12 py-10">
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <p className="text-white mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <p className="text-white mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <p className="text-white mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <p className="text-white mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiBootstrap color="#61DAFB" size={50} />
          </span>
          <p className="text-white mt-2">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
