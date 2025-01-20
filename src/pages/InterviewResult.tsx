import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Video, FileText, Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data for interview results
const interviewResults = [
  {
    id: 1,
    name: "John Smith",
    profilePhoto: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    recordingUrl: "interview-recording.mp4",
    transcriptUrl: "interview-transcript.docx",
    reviewUrl: "agent-review.pdf",
    score: 85,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profilePhoto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    recordingUrl: "interview-recording-2.mp4",
    transcriptUrl: "interview-transcript-2.docx",
    reviewUrl: "agent-review-2.pdf",
    score: 92,
  },
];

export default function InterviewResult() {
  const navigate = useNavigate();
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCandidates(interviewResults.map(result => result.id));
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleSelectCandidate = (candidateId: number) => {
    setSelectedCandidates(prev => {
      if (prev.includes(candidateId)) {
        return prev.filter(id => id !== candidateId);
      } else {
        return [...prev, candidateId];
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Interview Results</h1>
          <p className="text-muted-foreground">
            Review candidate interview results and assessments
          </p>
        </div>
        <div className="space-x-4">
          <Button 
            variant="default" 
            onClick={() => navigate("/hiring-list")}
            disabled={selectedCandidates.length === 0}
          >
            Add to Hiring List
          </Button>
          <Button 
            variant="secondary"
            onClick={() => navigate("/create-interview")}
          >
            Create Another Interview
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedCandidates.length === interviewResults.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Candidate</TableHead>
              <TableHead>Interview Recording</TableHead>
              <TableHead>Interview Transcript</TableHead>
              <TableHead>Agent Review</TableHead>
              <TableHead className="text-right">Agent Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interviewResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell>
                  <Checkbox 
                    checked={selectedCandidates.includes(result.id)}
                    onCheckedChange={() => handleSelectCandidate(result.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={result.profilePhoto} alt={result.name} />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{result.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="space-x-2">
                    <Video className="h-4 w-4" />
                    <span>View Recording</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Download Transcript</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>View Review</span>
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{result.score}/100</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}