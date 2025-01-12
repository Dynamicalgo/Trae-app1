import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    applicants: 24,
    posted: "2 days ago",
    closing: "In 12 days",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    applicants: 18,
    posted: "1 week ago",
    closing: "In 20 days",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    applicants: 32,
    posted: "3 days ago",
    closing: "In 15 days",
  },
];

export default function Jobs() {
  const navigate = useNavigate();

  const handleJobClick = (jobTitle: string) => {
    navigate(`/candidates?job=${encodeURIComponent(jobTitle)}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Jobs</h1>
          <p className="text-muted-foreground">
            Manage your job postings and track applications
          </p>
        </div>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => navigate("/post-job")}
        >
          <Plus className="mr-2 h-4 w-4" /> Post New Job
        </Button>
      </div>
      
      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card 
            key={job.id} 
            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleJobClick(job.title)}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.department} • {job.location}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {job.applicants} applicants
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Closing {job.closing}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}