import React from "react";
import { download } from "../assets";
import { downLoadImage } from "../utils";


const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className="rounded-xl group relative shadow-hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 bg-black m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className=' w-7 h-7 rounded-full object-cover bg-red-400 flex justify-center content-center text-white text-md  '>
                  {name[0]}
            </div>
            <p className="text-white text-md">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              downLoadImage(_id, photo);
            }}
            className="outline-none bg-transparent border-none bg-red-400 rounded-full"
          > 
           <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />

          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Card;
