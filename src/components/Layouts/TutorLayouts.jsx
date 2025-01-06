import React from "react";

const TutorLayouts = () => {
  return (
    <div className="overflow-hidden w-full border border-bg-border rounded-xl bg-white flex flex-col items-start relative p-4 gap-3">
      <div className="flex items-center gap-2 mt-auto">
        <div className="w-10 h-10 overflow-hidden">
          <img src="/avatar/ava1.png" alt="avatar" />
        </div>
        <div className="flex flex-col justify-between">
          <h4 className="font-lato font-bold text-dark-1 md:text-md text-sm">Gregorius Edrik Lawanto</h4>
          <p className="font-lato font-regular text-dark-2 md:text-sm text-xs">
            Senior Talent Acquisition <span className="hidden sm:inline">di</span>
            <span className="font-lato font-bold text-dark-2 sm:text-sm text-xs hidden sm:inline"> WingsGroup</span>
          </p>
        </div>
      </div>
      <p className="font-lato text-dark-1 sm:text-md text-sm">
        Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
      </p>
    </div>
  );
};

export default TutorLayouts;
