import { Link, useLocation } from "react-router-dom";
import { 
  Briefcase, 
  Users, 
  Clipboard,
  PlayCircle, 
  BarChart,
  Menu,
  Send,
  Robot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  {
    title: "Dashboard",
    icon: BarChart,
    href: "/",
  },
  {
    title: "Jobs",
    icon: Briefcase,
    href: "/jobs",
  },
  {
    title: "Candidates",
    icon: Users,
    href: "/candidates",
  },
  {
    title: "Shortlisted",
    icon: Clipboard,
    href: "/interviews",
  },
  {
    title: "Create A.I Interview",
    icon: Robot,
    href: "/create-interview",
  },
  {
    title: "Send Invite",
    icon: Send,
    href: "/send-invite",
  },
];

export function Sidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-white border-r transition-transform duration-200 ease-in-out",
          !isOpen && "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <img 
            src="/lovable-uploads/35cee2f9-1f94-4626-930c-cbfed4a21b40.png" 
            alt="Hey Rocket Logo" 
            className="h-8"
          />
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium",
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}