import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, DollarSign, Star, Copy } from "lucide-react";
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
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(candidate.email);
    toast({
      description: "Email address copied to clipboard",
      duration: 2000,
    });
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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={candidate.profilePhoto} alt={candidate.name} />
              <AvatarFallback><User className="h-8 w-8" /></AvatarFallback>
            </Avatar>
            
            <div className="space-y-1">
              <h3 className="text-xl font-medium">{candidate.name}</h3>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{candidate.email}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={copyEmail}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{candidate.phone}</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                <span>${candidate.expectedSalary.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{candidate.aiScore}/100</span>
            </div>
            <Button>Send Offer</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}