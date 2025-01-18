import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

type CandidateStatus = "not_booked" | "booked" | "canceled";

interface Candidate {
  id: number;
  name: string;
  profilePhoto: string;
  email: string;
  phone: string;
  status: CandidateStatus;
  invitationSent: boolean;
  interviewDateTime?: string;
}

const shortlistedCandidates: Candidate[] = [
  {
    id: 1,
    name: "John Smith",
    profilePhoto: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    status: "not_booked",
    invitationSent: false,
    interviewDateTime: null,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profilePhoto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    status: "booked",
    invitationSent: true,
    interviewDateTime: "2024-04-15T14:30:00",
  },
];

const getStatusBadge = (status: CandidateStatus) => {
  const statusConfig = {
    not_booked: { label: "Not Booked", className: "bg-yellow-500" },
    booked: { label: "Booked", className: "bg-green-500" },
    canceled: { label: "Canceled", className: "bg-red-500" },
  };

  const config = statusConfig[status];
  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
};

export default function SendInvite() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState<Candidate[]>(shortlistedCandidates);

  const handleSendInvite = (candidateId: number) => {
    setCandidates(prev =>
      prev.map(candidate =>
        candidate.id === candidateId
          ? { ...candidate, invitationSent: !candidate.invitationSent }
          : candidate
      )
    );

    const candidate = candidates.find(c => c.id === candidateId);
    const action = candidate?.invitationSent ? "cancelled" : "sent";
    
    toast({
      title: `Invitation ${action}`,
      description: `The interview invitation has been ${action} ${action === 'sent' ? 'to' : 'for'} ${candidate?.name}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Send Interview Invitations
          </h1>
          <p className="text-muted-foreground">
            Manage and send interview invitations to shortlisted candidates
          </p>
        </div>
        <Button onClick={() => navigate("/interview-result")}>
          See Interview Results
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Contact Information</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Interview Schedule</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
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
                    <div className="text-sm">{candidate.email}</div>
                    <div className="text-sm text-muted-foreground">
                      {candidate.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {getStatusBadge(candidate.status)}
                </TableCell>
                <TableCell>
                  {candidate.interviewDateTime ? (
                    <span className="text-sm">
                      {new Date(candidate.interviewDateTime).toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Not scheduled
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => handleSendInvite(candidate.id)}
                    variant={candidate.invitationSent ? "secondary" : "default"}
                  >
                    {candidate.invitationSent ? "Invitation Sent" : "Send Invitation"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
