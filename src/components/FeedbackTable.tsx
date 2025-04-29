
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface FeedbackCriteria {
  name: string;
  feedback: string;
  score?: "excellent" | "good" | "average" | "needs-work" | null;
}

interface FeedbackTableProps {
  question: string;
  criteria: FeedbackCriteria[];
}

const FeedbackTable = ({ question, criteria }: FeedbackTableProps) => {
  const getBadgeColor = (score: string | null | undefined) => {
    switch (score) {
      case "excellent":
        return "bg-interview-excellent text-white";
      case "good":
        return "bg-interview-good text-white";
      case "average":
        return "bg-interview-average text-white";
      case "needs-work":
        return "bg-interview-needsWork text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="rounded-md border">
      <div className="bg-muted/50 p-4 font-medium">{question}</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Criteria</TableHead>
            <TableHead>Feedback</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {criteria.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {item.name}
                  {item.score && (
                    <Badge className={getBadgeColor(item.score)}>
                      {item.score.replace("-", " ")}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{item.feedback || "Not evaluated"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeedbackTable;
