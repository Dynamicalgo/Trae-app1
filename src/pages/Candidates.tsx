import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  User,
  FileText, 
  Mail, 
  Phone, 
  DollarSign,
  Star
} from "lucide-react";

// Mock data - replace with actual API data later
const candidates = [
  {
    id: 1,
    name: "John Smith",
    profilePhoto: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    expectedSalary: 75000,
    resumeUrl: "#",
    aiScore: 85,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profilePhoto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    expectedSalary: 82000,
    resumeUrl: "#",
    aiScore: 92,
  },
  // Add more mock candidates as needed
];

export default function Candidates() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jobTitle = searchParams.get('job') || 'All';
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  const toggleCandidate = (candidateId: number) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId)
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const handleProceedToInterview = () => {
    navigate('/interviews');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {jobTitle} Candidates
          </h1>
          <p className="text-muted-foreground">
            Review and select candidates for interviews
          </p>
        </div>
        <Button 
          onClick={handleProceedToInterview}
          disabled={selectedCandidates.length === 0}
        >
          Shortlist ({selectedCandidates.length})
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Select</TableHead>
              <TableHead>Candidate</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Expected Salary</TableHead>
              <TableHead className="text-right">AI Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCandidates.includes(candidate.id)}
                    onCheckedChange={() => toggleCandidate(candidate.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={candidate.profilePhoto} alt={candidate.name} />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{candidate.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{candidate.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{candidate.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>View Resume</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>${candidate.expectedSalary.toLocaleString()}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{candidate.aiScore}/100</span>
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