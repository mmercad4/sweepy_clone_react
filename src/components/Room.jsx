import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function Room({ rooms }) {
  const roomsToDisplay = rooms.map((room) => {
    return (
      <div className="w-[50vw] mx-auto bg-slate-600 rounded-xl shadow-md overflow-hidden m-5 text-white cursor-pointer px-10 py-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl">{room.room}</h1>
            <p>
              {room.tasks.length} task{room.tasks.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex justify-center items-center mr-[10%]">
            <ProgressBar room={room} />
          </div>
        </div>
      </div>
    );
  });

  return <>{roomsToDisplay}</>;
}
