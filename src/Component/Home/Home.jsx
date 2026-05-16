import React from "react";
import avatarImg from "../../assets/image.png";
import TextChange from "../TextChange";
import CV from "../../assets/Sunkari_Praveen(resume).pdf";
import { BsDownload } from "react-icons/bs";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          A dedicated and detail-oriented individual looking for an entry-level
          position at a well-reputed organization to gain experience and
          exposure and expand my knowledge.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
          <a
            className="flex items-center text-yellow-500 font-semibold"
            href={CV}
            download="CV.pdf"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-full font-bold transition duration-300 ease-in-out hover:border hover:border-white">
              Download CV <BsDownload className="ml-2 text-lg" />
            </button>
          </a>
        </div>
      </div>
      <div>
        <img class="w-80 h-100" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
