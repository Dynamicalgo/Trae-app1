import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type CandidateStatus = "not_booked" | "booked" | "canceled";

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: CandidateStatus;
  invitationSent: boolean;
}

// Using the same mock data structure from the shortlisted candidates
const shortlistedCandidates: Candidate[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    status: "not_booked",
    invitationSent: false,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    status: "booked",
    invitationSent: true,
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
  const [candidates, setCandidates] = useState<Candidate[]>(shortlistedCandidates);

  const handleSendInvite = (candidateId: number) => {
    setCandidates(prev =>
      prev.map(candidate =>
        candidate.id === candidateId
          ? { ...candidate, invitationSent: true }
          : candidate
      )
    );

    toast({
      title: "Invitation Sent",
      description: "The interview invitation has been sent successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Send Interview Invitations
        </h1>
        <p className="text-muted-foreground">
          Manage and send interview invitations to shortlisted candidates
        </p>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact Information</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">
                  {candidate.name}
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
                <TableCell className="text-right">
                  <Button
                    onClick={() => handleSendInvite(candidate.id)}
                    disabled={candidate.invitationSent}
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