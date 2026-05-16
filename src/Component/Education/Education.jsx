import React from "react";

import { PiCertificate } from "react-icons/pi";

const Education = () => {
  return (
    <div id="Education" className="p-2 md:p-16">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-2 items-center">
            <PiCertificate color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Manpower Development PG College Ecil(Kushaiguda){" "}
              </h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2022 - Oct 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Master of Computer Applications</li>
                <li>- 8.0 CGPA</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
            <PiCertificate color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Government Degree college Medak</h2>
              <p className="text-sm leading-tight font-thin">
                Jul 2019 - Aug 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Bachelor of Science.</li>
                <li>- 7.89 CGPA</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
            <PiCertificate color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Government Junior College Gajwel
              </h2>
              <p className="text-sm leading-tight font-thin">
                Jun 2017 - Mar 2019
              </p>
              <ul className="text-sm p-2">
                <li>- Intermediate.</li>
                <li>- 64%</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
            <PiCertificate color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Bharathi Vidhyalaya High School Patancheru
              </h2>
              <p className="text-sm leading-tight font-thin">
                Jul 2016 - Mar 2017
              </p>
              <ul className="text-sm p-2">
                <li>- Secondary Education.</li>
                <li>- 7.2 CGPA</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
