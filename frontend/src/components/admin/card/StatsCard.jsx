export default function StatsCard({ title, count , icon }) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title flex flex-row justify-center">{icon} {title}</h2>
        <div className="card-actions justify-end">
          <span className="text-xl" >{count}</span>
        </div>
      </div>
    </div>
  );
}
