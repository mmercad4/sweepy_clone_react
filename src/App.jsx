import { useState } from "react";

import Heading from "./components/Heading";
import Room from "./components/Room";

function App() {
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
    },
  ]);

  return (
    <div className="bg-gray-700 h-[100vh]">
      <Heading />
      <Room rooms={rooms} />
    </div>
  );
}

export default App;
