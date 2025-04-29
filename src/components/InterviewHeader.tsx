
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface InterviewHeaderProps {
  candidateName: string;
  position: string;
  date: string;
  overallFeedback: string;
}

const InterviewHeader = ({
  candidateName,
  position,
  date,
  overallFeedback,
}: InterviewHeaderProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="" />
              <AvatarFallback className="text-xl">
                {candidateName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{candidateName}</h1>
              <p className="text-muted-foreground">
                {position} • Interview Date: {date}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Overall Feedback</h2>
          <p className="text-gray-700">{overallFeedback}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterviewHeader;
