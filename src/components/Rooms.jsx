export default function Rooms({ rooms, onRoomClick }) {
  const roomsToDisplay = rooms.map((room) => {
    const totalCleanliness = room.tasks.reduce(
      (total, task) => total + task.cleanliness,
      0
    );

    const roomCleanliness = totalCleanliness / room.tasks.length + 1;

    return (
      <div
        onClick={() => {
          onRoomClick(room);
        }}
        key={room.id}
        className="w-[50vw] mx-auto bg-slate-600 rounded-xl shadow-md overflow-hidden m-5 text-white cursor-pointer px-10 py-5"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl">{room.room}</h1>
            <p>
              {room.tasks.length} task{room.tasks.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex justify-center items-center mr-[10%]">
            <progress max={100} value={roomCleanliness} title="test" />
          </div>
        </div>
      </div>
    );
  });

  return <>{roomsToDisplay}</>;
}
