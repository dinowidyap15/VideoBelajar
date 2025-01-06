import React from "react";
import Button from "../Elements/Button";

const CardLayouths = ({ card, onEdit, onDelete, showActions = false }) => {
  return (
    <div className="overflow-hidden border border-bg-border rounded-xl bg-white flex flex-col items-start relative p-4 gap-4">
      <div className="flex flex-row gap-3 md:flex-col">
        <img src={card.thumbnail} alt="collection video" className="w-20 h-20 md:w-auto md:h-auto md:rounded-xl object-cover rounded-lg md:object-contain" />
        <div className="flex flex-col md:flex-col justify-between">
          <div className="flex flex-col md:mb-4 mb-1">
            <h3 className="font-poppins font-regular md:text-lg text-md leading-[1.1]">{card.title.length > 30 ? card.title.substring(0, 32) + "..." : card.title}</h3>
            <p className="font-lato text-dark-2 sm:mt-2 md:block hidden">{card.description.substring(0, 90)}...</p>
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <div className="w-10 h-10 overflow-hidden">
              <img src={card.avatar} alt="avatar" />
            </div>
            <div className="flex flex-col justify-between">
              <h4 className="font-lato font-bold text-dark-1 md:text-md text-sm">{card.name}</h4>
              <p className="font-lato font-regular text-dark-2 md:text-sm text-xs">
                {card.role} <span className="hidden sm:inline">di</span> <span className="font-lato font-bold text-dark-2 sm:text-sm text-xs hidden sm:inline">{card.company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <p className="font-poppins font-semibold md:text-xl text-lg text-primary-400">Rp {card.price.substring(0, 3)}K</p>
      </div>
      {showActions && (
        <div className="flex ml-auto gap-3 mt-4">
          <Button onClick={() => onEdit(card)} width="w-24" variant="primary" btn={1}>
            Edit
          </Button>
          <Button onClick={() => onDelete(card.id)} width="w-24" variant="primary" btn={3}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default CardLayouths;
