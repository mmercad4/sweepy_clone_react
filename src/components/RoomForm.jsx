import { useState } from "react";

export default function RoomForm({ onAddNewRoom }) {
  const [room, setRoom] = useState({
    room: "",
    tasks: [],
    cleanliness: 0,
    id: Math.floor(Math.random() * 1000),
  });

  const [formValues, setFormValues] = useState({
    name: "",
    task: "",
    frequency: 0,
  });

  const handleInputChange = (e) => {
    if (e.target.name === "room") {
      setFormValues((prevState) => ({
        ...prevState,
        name: e.target.value,
      }));
    }

    if (e.target.name === "task") {
      setFormValues((prevState) => ({
        ...prevState,
        task: e.target.value,
      }));
    }

    if (e.target.frequency === "frequency") {
      setFormValues((prevState) => ({
        ...prevState,
        frequency: e.target.value,
      }));
    }
    console.log("name", formValues.name);
    console.log("task", formValues.task);
    console.log("frequency", formValues.frequency);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-slate-500 p-10 rounded-lg shadow-lg min-w-full text-white">
          <h1 className="text-center text-2xl mb-6 text-white font-bold font-sans">
            Add a new room and a task
          </h1>
          <div>
            <label className="text-white font-semibold block my-3 text-md">
              Room name
            </label>
            <input
              className="w-full bg-slate-700 px-4 py-2 rounded-lg focus:outline-none focus:text-white"
              type="text"
              name="room"
              id="room"
              placeholder="Room name"
              onChange={handleInputChange}
              value={formValues.name}
            />
          </div>
          <h1 className="text-center text-2xl mb-6 mt-10 text-white font-bold font-sans">
            Add your first task
          </h1>
          <div>
            <label className="text-white font-semibold block my-3 text-md">
              Task name
            </label>
            <input
              className="w-full bg-slate-700 px-4 py-2 rounded-lg focus:outline-none focus:text-white"
              type="text"
              name="task"
              id="task"
              placeholder="task name"
              onChange={handleInputChange}
              value={formValues.task}
            />
          </div>
          <div>
            <label className="text-white font-semibold block my-3 text-md">
              Frequency (days)
            </label>
            <input
              className="w-full bg-slate-700 px-4 py-2 rounded-lg focus:outline-none text-white focus:text-white"
              type="number"
              name="frequency"
              id="frequency"
              placeholder="frequency in days"
              value={formValues.frequency}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target);
            }}
            className="w-full mt-6 bg-blue-950 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Add room
          </button>
        </form>
      </div>
    </div>
  );
}
