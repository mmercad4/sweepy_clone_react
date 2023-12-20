export default function Room({ room }) {
  const tasksToDisplay = room.tasks.map((task) => {
    const year = task.lastCleaned.getFullYear();
    const month = task.lastCleaned.getMonth();
    const day = task.lastCleaned.getDate();
    return (
      <div
        key={task.id}
        className="w-[50vw] mx-auto bg-slate-600 rounded-xl shadow-md overflow-hidden m-5 text-white cursor-pointer px-10 py-5"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl">{task.task}</h1>
            <p>last cleaned: {`${month}/${day}/${year}`}</p>
          </div>
          <div className="flex justify-center items-center mr-[10%]">
            <progress max={100} value={task.cleanliness} />
          </div>
        </div>
      </div>
    );
  });

  return <>{tasksToDisplay}</>;
}
