import React from "react";
import { FaLinkedinIn, FaFacebookF, SiNetlify } from ".././assets/icon";
import { Link } from "react-router-dom";
const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/faizan-siddique-b20962298/",
      icon: <FaLinkedinIn className="text-blue-500 hover:text-gray-200" />,
    },
    {
      id: 2,
      link: "/",
      icon: <FaFacebookF className="text-blue-500 hover:text-gray-200" />,
    },
    {
      id: 3,
      link: "https://app.netlify.com/teams/faizansiddique193/sites",
      icon: <SiNetlify className="text-blue-500 hover:text-gray-200" />,
    },
  ];
  return (
    <footer>
      <div className="bg-black w-full text-white py-5  ">
        <div className="space-y-3">
          <h1 className="md:font-bold font-semibold md:text-2xl text-xl text-center">
            Code Master
          </h1>
          <p className="text-center md:text-base text-sm  max-w-md overflow-hidden mx-auto">
            Hi! I'm Code Master, a web developer with a passion for creating
            sleek, user-friendly websites. I specialize in modern web
            technologies, focusing on delivering high-quality, innovative
            solutions. Let’s build something amazing together.
          </p>
        </div>
        <div className="mt-6">
          {/* socail media icon and links */}
          <ul className="flex justify-center gap-x-6">
            {socialLinks.map((socialData) => (
              <li
                className="bg-gray-200 hover:bg-blue-500 p-1 rounded-full "
                key={socialData.id}
              >
                <Link className="text-md" to={socialData.link}>
                  {socialData.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t bg-[#007BFF] border-black/15 text-white py-1">
        <p className="text-sm md:text-base pl-2">
          &copy; 2024 Code Master. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
