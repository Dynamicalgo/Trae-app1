import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, DollarSign, Star, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function HiringList() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const candidate = {
    name: "Sarah Johnson",
    profilePhoto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    expectedSalary: 82000,
    aiScore: 92,
    noticePeriod: "3 Month Notice"
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hiring List</h1>
          <p className="text-muted-foreground">
            View and manage your shortlisted candidates for hiring
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate("/interview-result")}>
          Back to Results
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20%]">Candidate</TableHead>
              <TableHead className="w-[20%]">Contact</TableHead>
              <TableHead className="w-[18%]">Notice Period</TableHead>
              <TableHead className="w-[12%]">Expected Salary</TableHead>
              <TableHead className="w-[15%] text-right">Overall Score</TableHead>
              <TableHead className="w-[15%] text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={candidate.profilePhoto} alt={candidate.name} />
                    <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
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
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{candidate.noticePeriod}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <span>${candidate.expectedSalary.toLocaleString()}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{candidate.aiScore}/100</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button onClick={() => window.open('https://www.gmail.com', '_blank')}>
                  Send Offer
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}