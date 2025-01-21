import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, DollarSign, Star } from "lucide-react";

export default function HiringList() {
  const navigate = useNavigate();

  const candidate = {
    name: "Sarah Johnson",
    profilePhoto: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    expectedSalary: 82000,
    aiScore: 92,
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

      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={candidate.profilePhoto} alt={candidate.name} />
            <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h3 className="font-medium">{candidate.name}</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                {candidate.email}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                {candidate.phone}
              </div>
              <div className="flex items-center text-muted-foreground">
                <DollarSign className="mr-2 h-4 w-4" />
                ${candidate.expectedSalary.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{candidate.aiScore}/100</span>
          </div>
        </div>
      </Card>
    </div>
  );
}