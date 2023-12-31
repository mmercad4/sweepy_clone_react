import { useState } from "react";

import Heading from "./components/Heading";
import Rooms from "./components/Rooms";
import Room from "./components/Room";
import RoomForm from "./components/RoomForm";

function App() {
  const currentDate = new Date();

  const [currentPage, setCurrentPage] = useState("home");
  const [currentRoom, setCurrentRoom] = useState({});
  const [rooms, setRooms] = useState([
    {
      room: "Bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
          id: 0,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
      ],
      cleanliness: 0,
      id: 0,
    },
    {
      room: "Kitchen",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
          id: 0,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
      ],
      cleanliness: 0,
      id: 1,
    },
    {
      room: "Office",
      tasks: [
        {
          task: "sweep",
          cleanliness: 50,
          id: 0,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 1,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 2,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 3,
          lastCleaned: new Date("2023-12-31T12:30:00"),
          frequency: 7,
        },
      ],
      cleanliness: 0,
      id: 2,
    },
  ]);

  const handleNewRoomAdded = function (room) {
    const name = room.name;
    const task = room.task;
    const frequency = room.frequency;
    const earliestDate = new Date(0);

    const calculateCleanliness = () => {
      const cleanliness = 'test'
    };

    const roomToAdd = {
      room: name,
      tasks: [
        {
          task: task,
          cleanliness: 0,
          id: 0,
          lastCleaned: earliestDate,
          frequency: frequency,
        },
      ],
      cleanliness: 0,
      id: Math.floor(Math.random() * 1000),
    };

    setRooms((prevState) => [...prevState, roomToAdd]);
    setCurrentPage("home");
  };

  const handleRoomClick = function (room) {
    console.log(`${room.id} has been clicked`);
    setCurrentPage("room");
    setCurrentRoom(room);
  };

  const handleAddNewRoom = function () {
    setCurrentPage("roomForm");
  };

  let content = "";

  if (currentPage === "home") {
    content = (
      <div className="bg-gray-700 h-[100vh]">
        <Heading name="ROOMS" />
        <Rooms rooms={rooms} onRoomClick={handleRoomClick} />
      </div>
    );
  }

  if (currentPage === "room") {
    content = (
      <div className="bg-gray-700 h-[100vh]">
        <Heading name={`${currentRoom.room} tasks`} />
        <Room room={currentRoom} />
      </div>
    );
  }

  if (currentPage === "roomForm") {
    content = (
      <>
        <Heading name={"Add a new room"} />
        <RoomForm onAddNewRoom={handleNewRoomAdded} />
      </>
    );
  }

  return (
    <div className="bg-slate-700 h-[100vh]">
      {content}
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleAddNewRoom}
          className="text-white bg-slate-800 rounded-full h-16 w-16s flex justify-center items-center p-3"
        >
          <span className="text-[3rem] font-bold pb-3">+</span>
        </button>
      </div>
    </div>
  );
}

export default App;
