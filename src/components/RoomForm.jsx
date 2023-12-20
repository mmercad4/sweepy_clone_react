export default function RoomForm({ submitNewRoom }) {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-slate-500 p-10 rounded-lg shadow-lg min-w-full">
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
              name="Room name"
              id="Room name"
              placeholder="Room name"
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
              name="Room name"
              id="Room name"
              placeholder="Room name"
            />
          </div>
          <div>
            <label className="text-white font-semibold block my-3 text-md">
              Task name
            </label>
            <input
              className="w-full bg-slate-700 px-4 py-2 rounded-lg focus:outline-none focus:text-white"
              type="text"
              name="Room name"
              id="Room name"
              placeholder="Room name"
            />
          </div>
          <button className="w-full mt-6 bg-blue-950 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">
            Add room
          </button>
        </form>
      </div>
    </div>
  );
}
