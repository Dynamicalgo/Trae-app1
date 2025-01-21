import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <header className="fixed top-0 right-0 left-0 h-20 bg-white border-b z-30">
      <div className="flex justify-between items-center h-full">
        <div className="pl-4 md:pl-6">
          <img 
            src="/lovable-uploads/35cee2f9-1f94-4626-930c-cbfed4a21b40.png" 
            alt="Hey Rocket Logo" 
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex items-center gap-4 px-6">
          <div className="flex flex-col">
            <span className="text-sm font-light italic text-gray-700 underline decoration-gray-300">
              Welcome Sean Chi
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}