import "./ProgressBar.scss";

export function ProgressBar({ width }: { width: number }) {
  return (
    <div className="container">
      <div className="progress2 progress-moved">
        <div style={{ width: `${width}%` }} className="progress-bar2"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
