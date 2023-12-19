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
    },
    {
      room: "bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
        },
      ],
    },
    {
      room: "bedroom",
      tasks: [
        {
          task: "sweep",
          cleanliness: 100,
        },
      ],
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
