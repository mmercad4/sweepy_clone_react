export default function ProgressBar({ room }) {
  return <progress max={room.tasks.length} value={1} />;
}
