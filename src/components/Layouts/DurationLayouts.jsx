import React from "react";
import { Play, Watch } from "../Elements/SVG";

const DurationLayouts = ({ title }) => {
  return (
    <div className="overflow-hidden w-full border border-bg-border mt-3 rounded-xl bg-white hover:bg-gr-50 cursor-pointer flex flex-col items-start relative p-4 gap-4">
      <div className="flex flex-row justify-between w-full gap-4">
        <p className="font-lato font-semibold text-dark-1 sm:text-md text-sm truncate sm:whitespace-normal">{title}</p>
        <div className="sm:flex flex-row self-end gap-2 hidden">
          <Play />
          <p className="font-lato text-dark-2 md:text-md sm:text-sm text-xs mr-2">Video</p>
          <Watch />
          <p className="font-lato text-dark-2 md:text-md sm:text-sm text-xs">12 Menit</p>
        </div>
      </div>
    </div>
  );
};

export default DurationLayouts;
