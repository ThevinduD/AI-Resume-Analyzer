interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  let badgeClass = "bg-badge-red text-red-500";
  let label = "Needs Work";

  if (score > 70) {
    badgeClass = "bg-badge-green text-green-500";
    label = "Strong";
  } else if (score > 49) {
    badgeClass = "bg-badge-yellow text-yellow-500";
    label = "Good Start";
  }

  return (
    <div className={`px-3 py-1 rounded-full ${badgeClass}`}>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;
