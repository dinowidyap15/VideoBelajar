import { footerLinks } from "../../constants";
import React, { useState } from "react";
import { DropdownArrow, FbIcon, IgIcon, LinkedInIcon, TwitIcon } from "../Elements/SVG";
import { Logo } from "../Elements/SVG";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="max-w-full mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 pb-0 bg-bg-main">
      <div className="flex flex-col w-full h-auto bg-white border-t border-bg-border xl:px-32 lg:px-20 md:px-16 px-8 xl:py-14 lg:py-12 md:py-10 py-8 relative">
        <div className="flex justify-between items-start sm:gap-20 gap-0">
          <div className="flex flex-col">
            <LinkScroll to="header" smooth={true} duration={10} className="cursor-pointer sm:w-48 w-40 h-auto">
              <Logo />
            </LinkScroll>
            <p className="font-lato md:text-lg text-md font-bold text-dark-1 sm:mb-3 mb-2 sm:pt-7 pt-4 ">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="md:text-lg text-sm text-gr-800 sm:mb-3 mb-2 leading-[1.3]">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="md:text-lg text-sm text-gr-800 sm:mb-3 mb-2">+62-877-7123-1234</p>
            <div className="block md:hidden w-full">
              {footerLinks.map((section, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-md font-bold cursor-pointer" onClick={() => toggleSection(index)}>
                    {section.title}
                    <span>{openSections[index] ? <DropdownArrow colorClass="text-dark-3" /> : <DropdownArrow colorClass="text-dark-3" direction="right" />}</span>
                  </div>

                  {openSections[index] && (
                    <div className="mt-2">
                      {section.items.map((item, idx) => (
                        <LinkScroll key={idx} to={item.href} smooth={true} duration={10} className="text-md text-dark-2 hover:text-secondary-400 block mb-2 cursor-pointer">
                          {item.text}
                        </LinkScroll>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-2 justify-end gap-16 font-lato">
            <div className="hidden md:flex gap-16">
              {footerLinks.map((section, index) => (
                <div key={index} className="leading-[1.1]">
                  <p className="text-md font-bold mb-4">{section.title}</p>
                  {section.items.map((item, idx) => (
                    <LinkScroll key={idx} to={item.href} smooth={true} duration={10} className="text-md text-dark-2 hover:text-secondary-400 mb-4 block cursor-pointer">
                      {item.text}
                    </LinkScroll>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col-reverse sm:flex-row justify-between items-start border-t
         border-bg-border pt-5 sm:mt-10 mt-auto gap-2 mb-0"
        >
          <p className="font-lato font-bold sm:text-md text-sm text-dark-2">@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="flex gap-5 cursor-pointer">
            <LinkedInIcon />
            <FbIcon />
            <IgIcon />
            <TwitIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
