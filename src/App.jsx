import { useState } from "react";

import Heading from "./components/Heading";
import Room from "./components/Rooms";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentRoom, setCurrentRoom] = useState("");
  const [rooms, setRooms] = useState([
    {
      room: "bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
        },
      ],
      cleanliness: 0,
      id: 0,
    },
    {
      room: "bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
        },
      ],
      cleanliness: 0,
      id: 1,
    },
    {
      room: "bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 50,
        },
        {
          task: "sweep",
          cleanliness: 50,
        },
        {
          task: "sweep",
          cleanliness: 50,
        },
        {
          task: "sweep",
          cleanliness: 50,
        },
      ],
      cleanliness: 0,
      id: 2,
    },
  ]);

  let content = "";

  if (currentPage === "home") {
    content = (
      <div className="bg-gray-700 h-[100vh]">
        <Heading name="ROOMS" />
        <Room rooms={rooms} />
      </div>
    );
  }
  return content;
}

export default App;
