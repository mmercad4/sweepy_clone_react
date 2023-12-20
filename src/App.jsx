import { useState } from "react";

import Heading from "./components/Heading";
import Rooms from "./components/Rooms";
import Room from "./components/Room";

function App() {
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
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 1,
          lastCleaned: new Date("2023-12-31T12:30:00"),
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 2,
          lastCleaned: new Date("2023-12-31T12:30:00"),
        },
        {
          task: "sweep",
          cleanliness: 50,
          id: 3,
          lastCleaned: new Date("2023-12-31T12:30:00"),
        },
      ],
      cleanliness: 0,
      id: 2,
    },
  ]);

  const handleRoomClick = function (room) {
    console.log(`${room.id} has been clicked`);
    setCurrentPage("room");
    setCurrentRoom(room);
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
        <Heading name={currentRoom.room} />
        <Room room={currentRoom} />
      </div>
    );
  }
  return content;
}

export default App;
