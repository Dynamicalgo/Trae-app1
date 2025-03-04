import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users, Calendar, Edit2, Link2, Check, Linkedin, Globe, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleJobClick = (jobTitle: string) => {
    navigate(`/candidates?job=${encodeURIComponent(jobTitle)}`);
  };

  const handleEditJob = (jobId: number) => {
    navigate(`/post-job?edit=${jobId}`);
  };

  const handleCopyUrl = async (jobId: number, jobTitle: string) => {
    const jobUrl = `${window.location.origin}/apply/${jobId}-${encodeURIComponent(jobTitle.toLowerCase().replace(/ /g, '-'))}`;
    
    try {
      await navigator.clipboard.writeText(jobUrl);
      setCopiedId(jobId);
      toast({
        title: "URL Copied!",
        description: "Job application URL has been copied to clipboard.",
      });
      
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Job Posted</h1>
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
      
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id}>
            <Card 
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
            
            <div className="space-y-1 mt-2">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditJob(job.id);
                  }}
                >
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyUrl(job.id, job.title);
                  }}
                >
                  {copiedId === job.id ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Link2 className="mr-2 h-4 w-4" />
                  )}
                  {copiedId === job.id ? "Copied!" : "Copy URL"}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://www.linkedin.com/post/new', '_blank');
                  }}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Post on LinkedIn
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://employers.indeed.com/p/post-job', '_blank');
                  }}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Post on Indeed
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://www.jobstreet.com.sg/en/cms/employer/', '_blank');
                  }}
                >
                  <Building className="mr-2 h-4 w-4" />
                  Post on JobStreet
                </Button>
              </div>
              <p className="text-xs text-muted-foreground pl-2">
                {`${window.location.origin}/apply/${job.id}-${job.title.toLowerCase().replace(/ /g, '-')}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}