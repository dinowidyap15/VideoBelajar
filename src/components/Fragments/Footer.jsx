import { footerLinks } from "../../constants";
import React, { useState } from "react";
import DropdownArrow from "../Elements/SVG/arrow";
import Logo from "../Elements/SVG/logo";
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
                    <span>{openSections[index] ? <DropdownArrow /> : <DropdownArrow direction="right" />}</span>
                  </div>

                  {openSections[index] && (
                    <div className="mt-2">
                      {section.items.map((item, idx) => (
                        <LinkScroll key={idx} to={item.href} smooth={true} duration={10} className="text-md text-dark-2 block mb-2 cursor-pointer">
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
                    <LinkScroll key={idx} to={item.href} smooth={true} duration={10} className="text-md text-dark-2 mb-4 block cursor-pointer">
                      {item.text}
                    </LinkScroll>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-start border-t
         border-bg-border pt-5 sm:mt-10 mt-auto gap-2 mb-0"
        >
          <p class="font-lato font-bold sm:text-md text-sm text-dark-2">@2023 Gerobak Sayur All Rights Reserved.</p>
          <div class="flex gap-5 cursor-pointer">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z" stroke="#222325" stroke-width="1.5" />
              <path
                d="M22.334 14.6665C23.6601 14.6665 24.9318 15.1933 25.8695 16.131C26.8072 17.0687 27.334 18.3404 27.334 19.6665V25.4998H24.0007V19.6665C24.0007 19.2245 23.8251 18.8006 23.5125 18.488C23.1999 18.1754 22.776 17.9998 22.334 17.9998C21.892 17.9998 21.468 18.1754 21.1555 18.488C20.8429 18.8006 20.6673 19.2245 20.6673 19.6665V25.4998H17.334V19.6665C17.334 18.3404 17.8608 17.0687 18.7985 16.131C19.7361 15.1933 21.0079 14.6665 22.334 14.6665Z"
                fill="#222325"
              />
              <path d="M13.9993 15.5H10.666V25.5H13.9993V15.5Z" fill="#222325" />
              <path
                d="M12.3327 12.9998C13.2532 12.9998 13.9993 12.2536 13.9993 11.3332C13.9993 10.4127 13.2532 9.6665 12.3327 9.6665C11.4122 9.6665 10.666 10.4127 10.666 11.3332C10.666 12.2536 11.4122 12.9998 12.3327 12.9998Z"
                fill="#222325"
              />
            </svg>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z" stroke="#222325" stroke-width="1.5" />
              <path
                d="M24.0007 9.6665H21.5007C20.3956 9.6665 19.3358 10.1055 18.5544 10.8869C17.773 11.6683 17.334 12.7281 17.334 13.8332V16.3332H14.834V19.6665H17.334V26.3332H20.6673V19.6665H23.1673L24.0007 16.3332H20.6673V13.8332C20.6673 13.6122 20.7551 13.4002 20.9114 13.2439C21.0677 13.0876 21.2796 12.9998 21.5007 12.9998H24.0007V9.6665Z"
                fill="#222325"
              />
            </svg>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z" stroke="#222325" stroke-width="1.5" />
              <g clip-path="url(#clip0_7251_1529)">
                <path
                  d="M23.166 10.6665H14.8327C12.5315 10.6665 10.666 12.532 10.666 14.8332V23.1665C10.666 25.4677 12.5315 27.3332 14.8327 27.3332H23.166C25.4672 27.3332 27.3327 25.4677 27.3327 23.1665V14.8332C27.3327 12.532 25.4672 10.6665 23.166 10.6665Z"
                  stroke="#222325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.3337 18.4748C22.4366 19.1683 22.3181 19.8766 21.9952 20.4989C21.6723 21.1213 21.1614 21.6259 20.5351 21.9412C19.9088 22.2564 19.1991 22.3661 18.5069 22.2547C17.8147 22.1433 17.1752 21.8165 16.6794 21.3207C16.1837 20.825 15.8569 20.1855 15.7455 19.4933C15.6341 18.8011 15.7438 18.0913 16.059 17.4651C16.3742 16.8388 16.8789 16.3279 17.5012 16.005C18.1236 15.682 18.8319 15.5636 19.5254 15.6664C20.2328 15.7713 20.8878 16.101 21.3935 16.6067C21.8992 17.1124 22.2288 17.7673 22.3337 18.4748Z"
                  stroke="#222325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M23.584 14.4165H23.5923" stroke="#222325" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_7251_1529">
                  <rect width="20" height="20" fill="white" transform="translate(9 9)" />
                </clipPath>
              </defs>
            </svg>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z" stroke="#222325" stroke-width="1.5" />
              <g clip-path="url(#clip0_7251_1535)">
                <path
                  d="M28.1654 11.5001C27.3674 12.063 26.4838 12.4935 25.5487 12.7751C25.0468 12.198 24.3798 11.789 23.6379 11.6034C22.896 11.4177 22.1149 11.4644 21.4004 11.7371C20.6859 12.0098 20.0724 12.4954 19.6429 13.1282C19.2133 13.7609 18.9884 14.5104 18.9987 15.2751V16.1084C17.5342 16.1464 16.0831 15.8216 14.7745 15.163C13.466 14.5043 12.3406 13.5323 11.4987 12.3334C11.4987 12.3334 8.16536 19.8334 15.6654 23.1667C13.9491 24.3317 11.9047 24.9159 9.83203 24.8334C17.332 29.0001 26.4987 24.8334 26.4987 15.2501C26.4979 15.018 26.4756 14.7864 26.432 14.5584C27.2825 13.7197 27.8827 12.6607 28.1654 11.5001V11.5001Z"
                  stroke="#222325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_7251_1535">
                  <rect width="20" height="20" fill="white" transform="translate(9 9)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
