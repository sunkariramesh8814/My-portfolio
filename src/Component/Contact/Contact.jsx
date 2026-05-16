import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-6 md:gap-12"
      style={{ minHeight: "50vh" }} // Adjust the minHeight value to increase height
    >
      {/* Left Section: Heading */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Contact</h1>
        <h3 className="text-md md:text-2xl font-light">+91 9391871547</h3>
        <h3 className="text-md md:text-2xl font-light">
          Feel free to reach out!
        </h3>
        <h6 className="text-md font-light">
          (By clicking on the links beside)
        </h6>
      </div>

      {/* Right Section: Links */}
      <ul className="flex flex-col gap-4 text-md md:text-xl">
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
          <MdOutlineEmail size={25} />
          <a
            href="mailto:sunkariramesh8814@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Gmail
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
          <CiLinkedin size={25} />
          <a
            href="https://www.linkedin.com/in/sunkariramesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
          <FaGithub size={25} />
          <a
            href="https://github.com/Sunkariramesh8814"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
