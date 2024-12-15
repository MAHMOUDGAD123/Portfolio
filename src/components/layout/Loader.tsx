import "../../styles/loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <svg>
        <circle cx="50%" cy="50%" r="51" />
        <circle cx="50%" cy="50%" r="43" />
        <circle cx="50%" cy="50%" r="35" />
        <circle cx="50%" cy="50%" r="27" />
        <circle cx="50%" cy="50%" r="19" />
        <circle cx="50%" cy="50%" r="11" />
        <circle cx="50%" cy="50%" r="3" />
      </svg>
    </div>
  );
}
