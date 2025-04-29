
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SummaryCardProps {
  title: string;
  score: number;
  description: string;
}

const SummaryCard = ({ title, score, description }: SummaryCardProps) => {
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 90) return "bg-interview-excellent";
    if (score >= 75) return "bg-interview-good";
    if (score >= 60) return "bg-interview-average";
    return "bg-interview-needsWork";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-xl font-bold">{score}%</span>
      </CardHeader>
      <CardContent>
        <Progress 
          value={score} 
          className="h-2"
          indicatorClassName={getColor(score)}
        />
        <p className="mt-2 text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
