import "@/styles/spinner.css";

export default function Spinner() {
  return (
    <div className="spinner">
      <svg>
        <circle cx="50%" cy="50%" r="21" />
        <circle cx="50%" cy="50%" r="15" />
      </svg>
    </div>
  );
}
