import { Button } from "./ui/button";

export function JobPostingButtons() {
  const handleLinkedInPost = () => {
    // TODO: Implement LinkedIn posting logic
    window.open('https://www.linkedin.com/post/new', '_blank');
  };

  const handleIndeedPost = () => {
    // TODO: Implement Indeed posting logic
    window.open('https://employers.indeed.com/p/post-job', '_blank');
  };

  const handleJobStreetPost = () => {
    // TODO: Implement JobStreet posting logic
    window.open('https://www.jobstreet.com.sg/en/cms/employer/', '_blank');
  };

  return (
    <div className="flex gap-4 mt-4">
      <Button 
        onClick={handleLinkedInPost}
        className="bg-[#0A66C2] hover:bg-[#004182]"
      >
        Post on LinkedIn
      </Button>
      
      <Button 
        onClick={handleIndeedPost}
        className="bg-[#2164F3] hover:bg-[#1747B0]"
      >
        Post on Indeed
      </Button>
      
      <Button 
        onClick={handleJobStreetPost}
        className="bg-[#E04751] hover:bg-[#B02F37]"
      >
        Post on JobStreet
      </Button>
    </div>
  );
}